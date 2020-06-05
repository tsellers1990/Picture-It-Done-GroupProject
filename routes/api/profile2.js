// import React from "react";
// import express from 'express';
// import aws from 'aws-sdk';
// import multerS3 from 'multer-s3';
// import multer from 'multer';
// import path from 'path';
// import url from 'url';
import { Component } from "react";
import ReactDom from 'react-dom';
import ReactS3 from 'react-s3';
import { aws } from '../../keys';

const config = {
    bucketName: '',
    albumName: '',
    region: '',
    accessKeyId: aws.accessKeyId,
    secretAccessKey: aws.secretAccessKey
} //fill this shit out

class Home extends Component {
    constructor() {
        super();
    }
    upload(e) {
        console.log(e.target.files[0]);
        ReactS3.upload(e.target.files[0], config)
            .then( (data) => {
                console.log(data)
            })
            .catch(err => {console.log(err)})
    }    
    render() {
        return(
            <div>
                <input
                type="file"
                onChange={this.upload}
                />
            </div>
        )
    }
}

ReactDom.render(<Home />, docment.getElementById('root'));