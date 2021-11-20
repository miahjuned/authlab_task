import React from 'react';
import { FeatureAddTitle } from './FeatureRequests_CSS';
import { FeatureForm } from './FeatureRequests_CSS';
import { FormLegend } from './FeatureRequests_CSS';
import { FormSubmit } from './FeatureRequests_CSS';
import { FormImgUpload } from './FeatureRequests_CSS';
import { FormImgUploadLabel } from './FeatureRequests_CSS';
import { FormImg } from './FeatureRequests_CSS';
import { FormInput } from './FeatureRequests_CSS';
import { FormFieldset } from './FeatureRequests_CSS';
import { FeatureAddSubTitle } from './FeatureRequests_CSS';
import { FeatureAll } from './FeatureRequests_CSS';
import { FeatureAdd } from './FeatureRequests_CSS';
import { FeatureContainer } from './FeatureRequests_CSS';
import { AiOutlineCloudUpload } from "react-icons/ai";
import AllFeature from "../All_Feature/AllFeature.js";
import { FormLegendTitle } from './FeatureRequests_CSS';

const FeatureRequests = () => {
    return (
        <div>
            <FeatureContainer>
                <FeatureAdd>
                    <FeatureForm>
                        <FormFieldset>
                            <FormLegendTitle>Feature Request</FormLegendTitle>
                            <FeatureAddSubTitle> Let us know what features you'd like to see on our website! </FeatureAddSubTitle>

                            <FormFieldset>
                                <FormLegend>Title</FormLegend>
                                <FormInput type="text"></FormInput>
                            </FormFieldset>

                            <FormFieldset>
                                <FormLegend>Details</FormLegend>
                                <FormInput type="text"></FormInput>
                            </FormFieldset>
                        <FormSubmit>
                            <FormImgUploadLabel for="fileUpload">
                                <AiOutlineCloudUpload/>
                                <p>Upload img</p>
                                </FormImgUploadLabel>
                            <FormImgUpload id="fileUpload" name="file-upload" type="file" />

                            <button className='primary_BTN_Outline'>Request Feature</button>
                        </FormSubmit>
                        
                        </FormFieldset>
                    </FeatureForm>
                </FeatureAdd>
                <FeatureAll>
                 <AllFeature/>
                </FeatureAll>
            </FeatureContainer>
        </div>
    );
};

export default FeatureRequests;