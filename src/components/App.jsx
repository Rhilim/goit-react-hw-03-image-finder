import { getImages } from 'api';
// import axios from 'axios';
import { Component } from 'react';
import { Notify } from 'notiflix';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './LoadMoreBtn/LoadMoreBtn';
import { Searchbar } from './Searchbar.jsx/Searchbar';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    error: null,
    isLoading: false,
    totalImages: 0,
  };

  changeQuery = newQuery => {
    this.setState({
      query: newQuery,
      // query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  async fetchImages() {
    const { query, page } = this.state;
    const options = { query, page };

    try {
      this.setState({ isLoading: true });

      const { hits, totalHits } = await getImages(options);

      const nextImages = hits.map(
        ({ id, webformatURL, tags, largeImageURL }) => ({
          id,
          webformatURL,
          tags,
          largeImageURL,
        })
      );

      if (page === 1) {
        if (!nextImages.length) {
          Notify.failure(`There is no result for ${query}`);
          return;
        }

        this.setState({ images: nextImages, totalImages: totalHits });
      } else {
        this.setState(({ images }) => ({
          images: [...images, ...nextImages],
        }));
      }

      this.checkLastPage({
        page,
        totalImages: totalHits,
      });
    } catch (error) {
      this.setState({ error });
      Notify.failure(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    // const {loading} = this.state;
    return (
      <>
        <Searchbar handleSubmit={this.changeQuery}></Searchbar>
        <ImageGallery images={this.state.images}>
          <ImageGalleryItem> </ImageGalleryItem>
        </ImageGallery>
        <Button
          handleLoadMore={this.handleLoadMore}
          state={this.state.images}
        ></Button>
      </>
    );
  }
}
