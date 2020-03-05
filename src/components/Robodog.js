import React, { Fragment } from "react";
import transloadit from "@uppy/transloadit";
import Uppy from "@uppy/core";
import Webcam from "@uppy/webcam"
import { Dashboard } from "@uppy/react";
import robodog from "@uppy/robodog";
import Transloadit from "@uppy/transloadit"
import '@uppy/core/dist/style.css'
import '@uppy/webcam/dist/style.css'
import '@uppy/robodog/dist/robodog.css'

export default class App extends React.PureComponent {
    constructor(props) {
        super(props)
        // this.uppy = new Uppy({
        //     id: 'fileUpload',
        //     debug: true,
        //     allowMultipleUploads: true
        // }).use(Webcam, {
        //     modes: [
        //         'picture'
        //     ],
        //     facingMode: 'user'
        // });
        
    }
    componentDidMount() {
        robodog.pick({
            target: 'body',
            params: {
                auth: {
                    key: "346380ed52dc4f9f84f08036ba2bcdad"
                }
            },
            providers: [
                'webcam'
            ]
        })
    }
    componentWillUnmount() {
        // this.uppy.close();
    }
    render() {
        return <Fragment>
            {/* <Dashboard uppy={ this.uppy } plugins={['Webcam']} proudlyDisplayPoweredByUppy={false}/> */}
            <hr/>
            <h2>Filepicker</h2>
            <div id="roboFilepickerDiv">
                <input type="file" id="roboFilepicker"></input>
            </div>
        </Fragment>
    }
}