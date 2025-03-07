import { useRef, useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

const CameraCapture = ({ onCapture }) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const overlayRef = useRef(null);  // Ref para el div del marco
  const [base64Image, setBase64Image] = useState("");
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  useEffect(() => {
    if (isCameraVisible) {
      startCamera();
    } else {
      stopCamera();
    }
    return () => stopCamera();
  }, [isCameraVisible]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error al acceder a la cámara:", error);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

  // Obtener las dimensiones del video
  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;

  // Tamaño del recorte (300x300)
  const recorteSize = 300;

  // Calcular la posición para recortar desde el centro
  const startX = (videoWidth - recorteSize) / 2;
  const startY = (videoHeight - recorteSize) / 2;

  // Limpiar el canvas antes de dibujar la nueva imagen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Establecer el tamaño del canvas
  canvas.width = recorteSize;
  canvas.height = recorteSize;

  // Dibujar la imagen recortada del centro
  ctx.drawImage(video, startX, startY, recorteSize, recorteSize, 0, 0, recorteSize, recorteSize);

  // Tamaño de la imagen (300x300)
/*     canvas.width = 300;
    canvas.height = 300;
    ctx.drawImage(video, 0, 0, 300, 300); */

    // Convertir a Base64 PNG  
    const imageData = canvas.toDataURL("image/png");
    setBase64Image(imageData);
    onCapture(imageData); // Enviar la imagen al formulario

    // Ocultar y apagar la cámara
    setIsCameraVisible(false);
  };

  const handleRetakePhoto = () => {
  // Limpiar el canvas antes de tomar la nueva foto
  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpiar canvas
  // Borra la imagen y reinicia el estado de la cámara  
  setBase64Image(""); // Borra la imagen actual
    onCapture(""); // Limpiar en el formulario
    setIsCameraVisible(true); // Apaga la cámara momentáneamente
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
     {/* Botón para activar la cámara */}
      {!isCameraVisible && !base64Image && (
        <Button 
        onClick={() => setIsCameraVisible(true)} 
        className='color-button mt-2 me-2'
        type="submit">
          Activar Cámara
        </Button>
      )}

      {/* Cámara (Solo visible si isCameraVisible es true) */}
      {isCameraVisible && (
              <div style={{ position: 'relative' }}>
              {/* Video */}
              <video
                ref={videoRef}
                autoPlay
                className="w-64 h-48 bg-black rounded-lg"
              />
              {/* Marco sobre el video */}
              <div
                ref={overlayRef}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '47%',
                  width: '300px',
                  height: '300px',
                  transform: 'translate(-50%, -50%)',
                  border: '3px solid red',
                  pointerEvents: 'none', // Para que no interfiera con la interacción con el video
                }}
              />
            </div>
       )}

      {/* Botón para capturar la foto */}
      {isCameraVisible && (
        <Button onClick={capturePhoto} className='color-button mt-2 me-2' type="submit">
          Tomar Foto
        </Button>
      )}
      <canvas ref={canvasRef} className="hidden" />


      {base64Image && (
      <div className="flex flex-col items-center">
{/*                  <h3>Imagen Recortada</h3>
        <img src={base64Image} alt="Captura" className="border border-gray-500 rounded-lg w-48 h-48" /> */}
        {/* Botón para volver a capturar */}
        <Button 
        onClick={handleRetakePhoto} 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Volver a Capturar
        </Button>
      </div>
    )}
  </div>
);
};

export default CameraCapture;
