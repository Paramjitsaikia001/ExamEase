import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-of-service-container p-8">
      <button
        onClick={() => navigate('/ExamEase/')}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
      >
        Home
      </button>
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Welcome to ExamEase. These terms and conditions outline the rules and regulations for the use of ExamEase's Website.
      </p>
      <h2 className="text-2xl font-bold mb-2">Introduction</h2>
      <p className="mb-4">
        By accessing this website we assume you accept these terms and conditions in full. Do not continue to use ExamEase's website if you do not accept all of the terms and conditions stated on this page.
      </p>
      <h2 className="text-2xl font-bold mb-2">License</h2>
      <p className="mb-4">
        Unless otherwise stated, ExamEase and/or its licensors own the intellectual property rights for all material on ExamEase. All intellectual property rights are reserved. You may view and/or print pages from http://www.examease.com for your own personal use subject to restrictions set in these terms and conditions.
      </p>
      <h2 className="text-2xl font-bold mb-2">User Comments</h2>
      <p className="mb-4">
        Certain parts of this website offer the opportunity for users to post and exchange opinions, information, material and data ('Comments') in areas of the website. ExamEase does not screen, edit, publish or review Comments prior to their appearance on the website and Comments do not reflect the views or opinions of ExamEase, its agents or affiliates. Comments reflect the view and opinion of the person who posts such view or opinion. To the extent permitted by applicable laws ExamEase shall not be responsible or liable for the Comments or for any loss cost, liability, damages or expenses caused and or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
      </p>
      <h2 className="text-2xl font-bold mb-2">Hyperlinking to our Content</h2>
      <p className="mb-4">
        The following organizations may link to our Website without prior written approval:
        <ul className="list-disc ml-8">
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>Online directory distributors when they list us in the directory may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
          <li>Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
        </ul>
      </p>
      <h2 className="text-2xl font-bold mb-2">iFrames</h2>
      <p className="mb-4">
        Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Website.
      </p>
      <h2 className="text-2xl font-bold mb-2">Content Liability</h2>
      <p className="mb-4">
        We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
      </p>
      <h2 className="text-2xl font-bold mb-2">Reservation of Rights</h2>
      <p className="mb-4">
        We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our Website upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Website, you agree to be bound to and abide by these linking terms and conditions.
      </p>
      <h2 className="text-2xl font-bold mb-2">Removal of links from our website</h2>
      <p className="mb-4">
        If you find any link on our Website or any linked website objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you.
      </p>
      <h2 className="text-2xl font-bold mb-2">Disclaimer</h2>
      <p className="mb-4">
        To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:
        <ul className="list-disc ml-8">
          <li>limit or exclude our or your liability for death or personal injury resulting from negligence;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
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

export default TermsOfService;