// import axios from "axios";
// import { useCurrentUserContext } from "../contexts/CurrentUserContext";

// export default function ArmeCard({ weapon_image: armeImage }) {
//   const { currentUser } = useCurrentUserContext();

//   const addToInventory = (e) => {
//     e.preventDefault();

//     axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/inventory`, {
//       withCredentials: true,
//     });
//   };

//   return (
//     <div className="cardBody">
//       {armeImage && (
//         <img
//           className="nameCharacter"
//           src={`${
//             import.meta.env.VITE_BACKEND_URL
//           }/public/assets/images/${armeImage}`}
//           alt="weaponImage"
//         />
//       )}
//       <button type="button" onClick={addToInventory}>
//         Add to inventory
//       </button>
//     </div>
//   );
// }
