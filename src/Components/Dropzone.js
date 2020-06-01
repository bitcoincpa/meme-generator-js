// import React, { Component } from "react";
// import Dropzone from "react-dropzone";
// import "../App.css";

// const MyDropzone = () => {
//   const getUploadParams = ({ meta }) => {
//     const url = "https://httpbin.org/post";
//     return {
//       url,
//       meta: { fileUrl: `${url}/${encodeURIComponent(meta.name)}` },
//     };
//   };

//   const handleChangeStatus = ({ meta }, status) => {
//     console.log(status, meta);
//   };

//   const handleSubmit = (files, allFiles) => {
//     console.log(files.map((f) => f.meta));
//     allFiles.forEach((f) => f.remove());
//   };

//   return (
//     <Dropzone
//       getUploadParams={getUploadParams}
//       onChangeStatus={handleChangeStatus}
//       onSubmit={handleSubmit}
//       accept="image/*,audio/*,video/*"
//       ({ getRootProps, getInputProps }) => (
// 	  <div
// 		{...getRootProps()}
// 		className={styles.uploadButton}
// 	  >
// 		<input {...getInputProps()} />
// 	  </div>
            
//     </Dropzone >
//   );
// };
// export default MyDropzone
