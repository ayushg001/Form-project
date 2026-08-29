/**
 * Client-Side Service Utilities
 * Runs 100% in-browser with zero external server, MongoDB, or Cloudinary dependency.
 */

/**
 * Process student photo or signature locally into Base64 data URL
 */
export const uploadImageFile = async (file) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('No file provided'));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};

/**
 * Process form data locally in browser session
 */
export const submitFormData = async (formData) => {
  const generatedId = 'GC-' + Date.now().toString(36).toUpperCase();
  return {
    success: true,
    storage: 'browser_local',
    message: 'Form verified and prepared for instant PDF download.',
    data: {
      _id: generatedId,
      ...formData,
      createdAt: new Date().toISOString(),
    },
  };
};

