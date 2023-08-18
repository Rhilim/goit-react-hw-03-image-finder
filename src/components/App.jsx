import { Component } from 'react';
import { Searchbar } from './Searchbar.jsx/Searchbar';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  changeQuery = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;
    console.log(query);
  };

  render() {
    return (
      <>
        <Searchbar handleSubmit={this.changeQuery}></Searchbar>
        {/* <ImageGallery>
          <ImageGalleryItem>
          <Modal></Modal>
          </ImageGalleryItem>
        </ImageGallery>
        <Button></Button> */}
      </>
    );
  }
}
