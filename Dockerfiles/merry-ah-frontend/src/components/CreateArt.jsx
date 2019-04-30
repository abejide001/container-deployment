import React, { Component } from 'react';
import DropzoneComponent from 'react-dropzone-component';
import { connect } from 'react-redux';
import CKEditor from 'ckeditor4-react';
import {
  handleUploadImages, getCategories
} from '../actions/artActions';
import Notify from '../utils/Notify';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


/**
 * @param {function} render
 *  @returns {JSX} jsx
 */
export class CreateArt extends Component {

  state={
    files: [],
    description:'',
    title: '',
    categoryId: '',
    price: 0,
    accessToken:localStorage.getItem('authToken'),
    isLoading: true,
    nowUploading:false,
    numberOfFiles: 0
  };

  componentDidMount() {
    this.props.getCategories();
  }

  addFileToState =(file)=>{
    let emptyFiles = false;
    if (this.state.numberOfFiles > 1){
      emptyFiles = false;
    }
    this.setState({files: this.state.files.concat(file), isLoading: emptyFiles });
  };

  removeFileFromState =(fileId)=>{
    let emptyFiles = false;
    if (this.state.files.length < 2){
      emptyFiles = true;
    }
    this.setState({files: this.state.files.filter( file => file.upload.uuid !== fileId), isLoading: emptyFiles});

  };

  handleChange = (event) => {
    this.setState({[ event.target.name] : event.target.value });
  };

  handleEditorChange = (event) => {
    this.setState({ description: event.editor.getData() });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ isLoading: true, nowUploading: true });
    await this.props.handleUploadImages(this.state);
  };
  eventHandlers = () => {
   let { numberOfFiles } = this.state;
    return {
      addedfile: (file) => {
        this.setState({ numberOfFiles: numberOfFiles++ })
        if (numberOfFiles <= 7){
          this.addFileToState(file);
        }
      },
      removedfile: (file) => {
        this.setState({ numberOfFiles: numberOfFiles-- })
        this.removeFileFromState(file.upload.uuid);
      },

      maxfilesreached:(files) =>{
        Notify.notifyError('Maximum files reached')
      },
    };
  }
  /**
   * @param {function} render
   *  @returns {JSX} jsx
   */
  render() {
    const { categories } = this.props.artProps;
    const { isLoading, nowUploading } = this.state;


    const componentConfig = {
      iconFiletypes: ['.mp4', '.mov', 'images'],
      showFiletypeIcon: true,
      postUrl: 'dummy-url',
    };

    const djsConfig = {
      autoProcessQueue: false,
      maxFiles: 7,
      uploadMultiple: true,
      acceptedFiles: 'image/*,.mp4,.mov',
      headers: { "My-Awesome-Header": "header value" },
      dictDefaultMessage: '<i class="fa fa-3x fa-cloud-upload"> </i> <br/>Drag an image here to upload, or click to select multiple',
      maxFilesize: 50,  //MB
      addRemoveLinks: true,
    };


    return (
      <div className="container mt-5 pt-5">
        <form onSubmit={this.handleSubmit}>
          <div className='col-md-6 offset-md-3'>
            <h5>CREATE NEW ARTICLE</h5>
            <div className="form-group">
              <label>Title</label>
              <input type="text" className="form-control title"
                     onChange={this.handleChange} name='title'
                     required={true}
                     placeholder="Enter Title" value={this.state.title}
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select className="form-control col-8" name='categoryId' onChange={this.handleChange} required={true}>
                <option>Select A Category</option>
                {categories.map(category =>{
                  return (
                    <option key={category.id} value={category.id}>{category.categoryName}</option>
                  )
                })}
              </select>
            </div>

            <div className="form-group">
              <label>Price</label>
              <input type="number" step={.01} className="form-control col-8" defaultValue={0.00}
                     onChange={this.handleChange} name='price'
                     placeholder="Enter Price"/>
                     <small className='text-danger'>Price set to 0.00 means item is not for sale</small>
            </div>

            <div className='row mt-4'>
              <h6 className='text-artistic col-md-12'>Add media files about the Artwork</h6>

              <div className=''>
                <DropzoneComponent
                  config={componentConfig}
                  eventHandlers={this.eventHandlers()}
                  djsConfig={djsConfig}
                />
              </div>
            </div>

            <div className='row mt-5'>
              <h6 className='text-artistic col-md-12'>Brief Description on the Artwork</h6>
              <div className=''>
                <CKEditor onChange={this.handleEditorChange}/>
              </div>
            </div>

            <div className='row mt-5 mb-5'>
              <button className='btn btn-primary' disabled={isLoading}>
                Create
              </button>
            </div>


            <div className={`alert alert-success ${nowUploading ? 'd-block' : 'd-none'} `}>
              Art is now being uploaded. Please be patient
            </div>
            </div>
        </form>
      </div>
    );
  }
}
CreateArt.propTypes = {
  artProps: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  handleUploadImages: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
  artProps: state.artReducer,
});

export default connect(mapStateToProps, {
  handleUploadImages, getCategories
})(withRouter(CreateArt));
