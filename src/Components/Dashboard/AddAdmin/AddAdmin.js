import React, { useState } from 'react';
import { DashboardContainer, DashboardMain } from '../Global_Dashboard_CSS/Global_Dashboard_CSS';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';
import { toast, ToastContainer } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { FormFieldset, FormImgUpload, FormImgUploadLabel, FormInput, FormLegend, FormLegendTitle } from '../../Tab/Feature_Requests/FeatureRequests_CSS';
import { SigninForm } from '../../Authentication/Signin/Signin_CSS';
import axios from 'axios';
import { AiOutlineCloudUpload } from 'react-icons/ai';


const AddAdmin = () => {
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [imageURLS , setImageURL] = useState(null);
    const onSubmit = (data) => {
        const adminDetail = { 
            name: data.Name,
            email: data.email,
            password: data.password,
            img: imageURLS
        }
        fetch('https://sorting-functionality-authlab.herokuapp.com/user/register-admin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminDetail)
        })
        .then(res => res.json())
        .then(user => {
            if(user.success === true){                
                toast.success("successfully make an admin", {
                    position: "bottom-right",
                });
                reset();
                setImageURL(null)
            } else {
                toast.error(user.message, {
                    position: "bottom-right",
                });
            }
        })
        .catch(err => {
            toast.error(err, {
                position: "bottom-right",
            });
        }) 
    }
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
        <DashboardMain>
            <DashboardSidebar/>
            <DashboardContainer>
                <SigninForm>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormFieldset>
                            <FormLegendTitle>Add an admin</FormLegendTitle>

                            <div>
                                <FormLegend>Name</FormLegend>
                                <FormInput name="Name" type="text" placeholder="Name" {...register("Name", {required: true})}/>
                                <span style={{color:"red"}}>{errors.Name?.type === 'required' && "Name is required"}</span>
                                
                                <FormLegend>Email</FormLegend>
                                <FormInput name="email" type="text" placeholder="email" {...register("email", {required: true})}/>
                                <span style={{color:"red"}}>{errors.email?.type === 'required' && "email is required"}</span>
                                
                                <FormLegend>Password</FormLegend>
                                <FormInput name="password" type="password" placeholder="password" {...register("password", {required: true})}/>
                                <span style={{color:"red"}}>{errors.password?.type === 'required' && "password is required"}</span>
                            </div>
                            <br/>
                            <FormLegend>img</FormLegend>
                            <FormImgUploadLabel for="fileUpload">
                                <AiOutlineCloudUpload/>
                                    <p>Upload img</p>
                                </FormImgUploadLabel>
                            <FormImgUpload id="fileUpload" name="Img" type="file" {...register("Img")} onChange={handleImageUpload}/> <br/>
                            {
                                imageURLS ? <img src={imageURLS} alt='admin img' width='80px'/>
                                : <p style={{color:'red'}}>Img not uploaded</p>
                            }
                            <label className="submitBtnAnimation">
                                <span className="btnAnimation"></span>
                                <span className="btnAnimation"></span>
                                <span className="btnAnimation"></span>
                                <span className="btnAnimation"></span>
                                <button type="submit" value="Submit">Make admin</button>
                            </label>

                        </FormFieldset>
                    </form>
                </SigninForm>
                <ToastContainer />

            </DashboardContainer>
        </DashboardMain>
    );
};

export default AddAdmin;