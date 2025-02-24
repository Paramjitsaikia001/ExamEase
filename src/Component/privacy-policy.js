import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy-container p-8">
      <button
        onClick={() => navigate('/ExamEase/')}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Home
      </button>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Welcome to ExamEase. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at support@examease.com.
      </p>
      <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>
      <p className="mb-4">
        We collect personal information that you voluntarily provide to us when registering at the Website, expressing an interest in obtaining information about us or our products and services, when participating in activities on the Website or otherwise contacting us.
      </p>
      <h2 className="text-2xl font-bold mb-2">How We Use Your Information</h2>
      <p className="mb-4">
        We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
      </p>
      <h2 className="text-2xl font-bold mb-2">Sharing Your Information</h2>
      <p className="mb-4">
        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
      </p>
      <h2 className="text-2xl font-bold mb-2">Cookies and Tracking Technologies</h2>
      <p className="mb-4">
        We may use cookies and similar tracking technologies to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.
      </p>
      <h2 className="text-2xl font-bold mb-2">Data Security</h2>
      <p className="mb-4">
        We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
      </p>
      <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
      <p className="mb-4">
        If you have questions or comments about this policy, you may email us at support@examease.com or by post to:
      </p>
      <p className="mb-4">
        ExamEase<br />
        1234 ExamEase St.<br />
        Exam City, EX 12345<br />
        Country
      </p>
      <button
        onClick={() => navigate('/ExamEase/')}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
      >
        Back to Home
      </button>
    </div>
  );
};

export default PrivacyPolicy;