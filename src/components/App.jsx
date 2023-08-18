import { Component } from 'react';
import { Button } from './LoadMoreBtn/LoadMoreBtn';
import { Searchbar } from './Searchbar.jsx/Searchbar';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // const index = '${Date.now()}/${newQuery}';
      // console.log(index.indexOf('newQuery'));
      // const cutQuery = index.slice(14, index.length);
      // console.log(cutQuery);

      console.log(
        `new request ${this.state.query} and page=${this.state.page}`
      );
      // HTTP запрос
      // this.setState({images: результат запроса})
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <>
        <Searchbar handleSubmit={this.changeQuery}></Searchbar>
        {/* <ImageGallery>
          <ImageGalleryItem>
          <Modal></Modal>
          </ImageGalleryItem>
        </ImageGallery> */}
        <Button
          handleLoadMore={this.handleLoadMore}
          state={this.state.images}
        ></Button>
      </>
    );
  }
}
