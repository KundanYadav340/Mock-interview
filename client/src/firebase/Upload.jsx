// import React, { useState } from 'react';
// import { ReactMediaRecorder } from 'react-media-recorder';
// import {storage} from './index';
// import {ref, uploadBytesResumable} from 'firebase/storage';

// const VideoRecorder = () => {
//   const [recordedMediaUrl, setRecordedMediaUrl] = useState(null);

//   const handleSaveRecording = () => {
//     if (recordedMediaUrl) {
//       // Upload recorded media to Firebase Storage
//       const storageRef = ref(storage, "interviewVideoAnswers/ex");
//       fetch(recordedMediaUrl)
//         .then((response) => response.blob())
//         .then((blob) => {
//         //   storageRef.put(blob).then((snapshot) => {
//         //     console.log('Media uploaded successfully!');
//         //     // Now you can do additional tasks like saving the download URL to your database
//         //   });
//         uploadBytesResumable(storageRef, blob);
//         // })
//         // .catch((error) => {
//         //   console.error('Error uploading media:', error);
//         });
//     }
//   };

//   const handleRetakeRecording = () => {
//     // Clear the recorded media URL to start a new recording
//     setRecordedMediaUrl(null);
//   };

//   return (
//     <div>
//       <ReactMediaRecorder
//         video
//         audio
//         render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
//           <div>
//             <video src={mediaBlobUrl} controls />
//             <div>
//               {status === 'stopped' ? (
//                 <>
//                   <button onClick={startRecording}>Start Recording</button>
//                   <button onClick={handleRetakeRecording}>Retake Recording</button>
//                   {recordedMediaUrl && (
//                     <button onClick={handleSaveRecording}>Save Recording</button>
//                   )}
//                 </>
//               ) : (
//                 <button onClick={stopRecording}>Stop Recording</button>
//               )}
//             </div>
//           </div>
//         )}
//         onStop={(recordedData) => {
//           setRecordedMediaUrl(recordedData.blobUrl);
//         }}
//         options={{
//           video: { mimeType: 'video/mpeg' },
//           audio: { mimeType: 'audio/webm' },
//         }}
//       />
//     </div>
//   );
// };

// export default VideoRecorder;
