// import { IndModal } from 'components/Modal/Modal';
import React, { Component } from 'react';

// import { Item } from './ImageGalleryItem.styled';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () =>
    this.setState({
      isModalOpen: true,
    });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { imgUrl, description, largeImgUrl } = this.props;
    return (
      <li>
        <img src={imgUrl} alt={description} onClick={this.openModal} />

        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          src={largeImgUrl} alt={description}
        >
          {/* <IndModal src={largeImgUrl} alt={description}>
            <button onClick={this.closeModal}>close</button>
          </IndModal> */}
          <div>
      <img src={largeImgUrl} alt={description} />
    </div>
        </Modal>
      </li>
    );
  }
}
