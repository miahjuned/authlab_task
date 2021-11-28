import React, { useContext, useState } from 'react';
import {  FeatureForm , FormLegend , FormSubmit , FormImgUpload , FormImgUploadLabel , FormInput , FormFieldset, FeatureAddSubTitle , FeatureAll , FeatureAdd , FeatureContainer , FormLegendTitle, FormInputTextarea } from './FeatureRequests_CSS';
import AllFeature from "../All_Feature/AllFeature.js";
import { AiOutlineCloudUpload } from "react-icons/ai";

import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { userContext } from '../../../App';
import { useHistory } from 'react-router';
import axios from 'axios';

const FeatureRequests = () => {
    const { user  } = useContext(userContext);
    const [imageURLS , setImageURL] = useState(null);
    const { register, handleSubmit, formState: { errors } , reset} = useForm();
    
    let history = useHistory();
    const onSubmit = (e) => {
        const featuresDetail = { 
            title: e.Title,
            description: e.Description,
            userId: user.id,
            img: imageURLS
        }
        
        if (user.email) {
            fetch('https://sorting-functionality-authlab.herokuapp.com/features', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(featuresDetail)
            })
            .then(res => res.json())
            .then(data => {
                if(data){                
                    toast.success(data.message, {
                        position: "bottom-right",
                    });
                    reset();
                }
            })
        } else {
            history.push('/login')
        }
    };

    const handleImageUpload = product => {

        const imageData = new FormData();
        imageData.set('key', '994392279289c0649211748cc7b4c09d');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
              
          });
    }
    return (
        <div>
            <FeatureContainer>
                
                {/* ================= Feature Request form ============= */}
                <FeatureAdd>
                    <FeatureForm onSubmit={handleSubmit(onSubmit)}>
                        <FormFieldset>
                            <FormLegendTitle>Feature Request</FormLegendTitle>
                            <FeatureAddSubTitle> Let us know what features you'd like to see on our website! </FeatureAddSubTitle>

                            <FormFieldset>
                                <FormLegend>Title</FormLegend>
                                <FormInput name="Title" type="text" placeholder="Title" {...register("Title", {required: true})}/>
                                <span style={{color:"red"}}>{errors.Title?.type === 'required' && "title is required"}</span>
                            </FormFieldset>

                            <FormFieldset>
                                <FormLegend>Details</FormLegend>
                                <FormInputTextarea name="Description" type="text" placeholder="Description" {...register("Description", {required: true})}/>
                                <span style={{color:"red"}}>{errors.Description?.type === 'required' && "Description is required"}</span>
                            </FormFieldset>

                        <FormSubmit>
                            <FormImgUploadLabel for="fileUpload">
                                <AiOutlineCloudUpload/>
                                    <p>Upload img</p>
                                </FormImgUploadLabel>
                            <FormImgUpload id="fileUpload" name="Img" type="file" {...register("Img")} onChange={handleImageUpload}/>

                            <button type='submit' className='primary_BTN'>Request Feature</button>
                        </FormSubmit>
                        
                        </FormFieldset>
                    </FeatureForm>
                </FeatureAdd>


                {/* =================All Feature ============= */}
                <FeatureAll>
                    <AllFeature />
                </FeatureAll>
                
            </FeatureContainer>
            <ToastContainer/>
        </div>
    );
};

export default FeatureRequests;