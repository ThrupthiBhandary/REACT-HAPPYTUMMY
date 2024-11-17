import React from 'react';

function SignUpModal({ onClose }) {
  const handleGoogleSignIn = () => {
    alert('Continue with Google clicked');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Sign Up</h2>
        <form>
          <label>Email</label>
          <input type="email" required />
          
          <label>Password</label>
          <input type="password" required />

          <button type="submit">Sign Up</button>
          <button type="button" onClick={handleGoogleSignIn}>Continue with Google</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpModal;
