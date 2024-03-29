import 'bootstrap/dist/css/bootstrap.css';
import './mintNFT.css';
import React, { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  const onImageChange = (event) => {
    setImages([...event.target.files]);
    const file = event.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
  }

  return (
    <div className="wrapper">
      <div className="content-center">
        <center><h1>Easily create an NFT on the Tezos Blockchain ♾️</h1></center>
        <center><h3> Just fill the form and submit 😉</h3></center>
        <br />
        <form>
          <div className="form-group">
            <label for="uploadMedia">Choose an Image, Video, Audio, or a 3D Model *</label><br />
            <small id="uploadMediaHelp" >File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</small>
            <input type="file" class="form-control" id="uploadMedia" aria-describedby="uploadMediaHelp" onChange={onImageChange} required /> <br />
            <center>{imageURLs.map(imageSrc => <img alt="..." src={imageSrc} style={{ width: 400, height: 250 }} />)}</center>
          </div>
          <br />
          <div class="form-group" >
            <label for="exampleInputName">Name *</label>
            <input type="text" class="form-control" id="exampleInputName" aria-describedby="NameHelp" placeholder="Enter NFT name" />
          </div>
          <br />
          <div class="form-group">
            <label for="exampleInputDesc">Description *</label><br />
            <small id="DescHelp" >The description will be included on the item's detail page underneath its image.</small>
            <input type="text" class="form-control" id="exampleInputDesc" placeholder="Provide a detailed description of your item." />
          </div>
          <br />
          <div class="form-group">
            <label for="contractadd">Smart contract address</label>
            <input type="text" class="form-control" id="contractadd" value="tx0......" disabled />
          </div>
          <br />
          <center><button type="button" class="btn btn-primary"><i className="tim-icons icon-check-2" /> Create NFT</button></center>
          <p id="status"></p>
        </form>
      </div>
    </div>
  );
}

export default App;
