import { useState } from "react";

const useApp = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  return { selectedImg, setSelectedImg };
};

export default useApp;
