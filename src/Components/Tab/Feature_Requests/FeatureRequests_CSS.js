import tw from "twin.macro";

export const FeatureContainer = tw.div`grid grid-cols-3 gap-4 tracking-tighter`;

// Add Feature Requests Section CSS
export const FeatureAdd = tw.div`shadow-lg p-5`;

export const FeatureForm = tw.form``;
export const FormFieldset = tw.fieldset`border border-solid border-gray-300 p-3`;
export const FormLegend = tw.legend`text-sm my-3`;
export const FormLegendTitle = tw.legend`text-2xl font-bold uppercase text-gray-700`;
export const FeatureAddSubTitle = tw.h2`text-lg p-2 font-medium text-gray-800`;
export const FormInput = tw.input`rounded-lg bg-red-50 w-full p-2 border outline-none  border-transparent  focus:outline-none focus:border-green-500 text-base font-medium`;
export const FormInputTextarea  = tw.textarea`rounded-lg bg-red-50 w-full p-2 border outline-none  border-transparent  focus:outline-none focus:border-green-500 text-base font-medium`;

export const FormSubmit = tw.div`flex justify-evenly  my-2`;
export const FormImgUpload = tw.input`hidden`;
export const FormImgUploadLabel = tw.label`rounded-lg bg-red-50  border px-5 space-x-2 cursor-pointer flex items-center`;

// All Feature Section CSS
export const FeatureAll = tw.div`col-span-2`;