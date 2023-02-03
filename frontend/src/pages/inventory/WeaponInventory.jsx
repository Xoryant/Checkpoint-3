// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useCurrentUserContext } from "@pages/contexts/CurrentUserContext";
// import axios from "axios";
// import WeaponCard from "../weapon/WeaponCard";

// export default function Weapon() {
//   const { currentUser } = useCurrentUserContext();
//   const [myWeapon, setMyWeapon] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_BACKEND_URL}/api/armes`)
//       .then(({ data }) => {
//         setMyWeapon(data);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }, []);

//   const handleSendImages = () => {
//     const formData = new FormData();
//     myWeapon.forEach((armeImage) => {
//       formData.append("files", armeImage);
//     });

//     axios
//       .post(`${import.meta.env.VITE_BACKEND_URL}/api/inventory`, formData)
//       .then(() => {
//         console.warn("Images sent to inventory successfully");
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };

//   return (
//     <div className="myweapons-General">
//       <div className="myweapons">
//         <h1>Armes</h1>
//         <div className="creation-form">
//           <div className="myweapons">
//             {myWeapon.length > 0
//               ? myWeapon.map((i) => <WeaponCard {...i} />)
//               : null}
//           </div>
//           <button type="button" onClick={handleSendImages}>
//             Envoyer les images
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
