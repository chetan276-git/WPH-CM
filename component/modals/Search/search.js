import Modal from 'react-bootstrap/Modal';

import style from './search.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        dialogClassName='modal-90w'
        className={`${style.search_modal}`}
        aria-labelledby='example-custom-modal-styling-title'
      >
        <Modal.Header closeButton border='0'></Modal.Header>
        <Modal.Body>
          <div className='modal_content d-flex justify-content-center align-items-center'>
            <form action='#'>
              <label htmlFor=''>WHAT ARE YOU LOOKING FOR?</label>
              <div className='input_group position-relative mt-3'>
                <input
                  type='text'
                  className='form-control border-bottom-1'
                  placeholder='Enter your Keywords...'
                />
                <div className='search_icon position-absolute'>
                  <AiOutlineSearch size={20} color='#232323' />
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchModal;
