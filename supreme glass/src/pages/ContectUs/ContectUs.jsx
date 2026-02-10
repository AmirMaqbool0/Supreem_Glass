import React, { useState } from 'react';
import './style.css';
import Banner from '../../components/Banner/Banner';
import { ClockLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import { app } from '../../firebase';
import { getFirestore, addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { MapPin, Phone, Clock } from 'lucide-react';

const ContectUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const db = getFirestore(app);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Full name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email address';
    if (!subject) newErrors.subject = 'Subject is required';
    if (!message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const AddMessage = async () => {
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const notify = () => toast.success("Message sent successfully");
    setLoading(true);

    try {
      const collectionRef = collection(db, 'ContectUs');
      const docRef = await addDoc(collectionRef, { name, email, subject, message });
      await updateDoc(doc(db, 'ContectUs', docRef.id), { uid: docRef.id });

      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
      notify();
    } catch (error) {
      console.error('Error adding message: ', error);
      toast.error('Failed to send message');
    }

    setLoading(false);
  };

  return (
    <div className="contactus-container">
      <Banner title={'Contecct Us'} />
      <div className="contactus-content">
        <div className="contactus-text">
          <span>Get In Touch With Us</span>
        </div>
        <div className="contactus-inner-container">
          <div className="contactus-left">
            <div className="contactus-left-box">
              <MapPin />
              <div className="contactus-left-box-text">
                <span>Address</span>
                <p>Near Emirates Gas Signal, Industrial Area 2, Ajman, U.A.E.</p>
              </div>
            </div>
            <div className="contactus-left-box">
              <Phone />
              <div className="contactus-left-box-text">
                <span>Phone</span>
                <p>CEO : +971 50 4852081   </p>
                <p>Sales Executive: +971 56 2340398</p>
                <p>Sales Executive: +971 56 1953124</p>
              </div>
            </div>
            <div className="contactus-left-box">
              <Clock />
              <div className="contactus-left-box-text">
                <span>Working Time</span>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
          <div className="contactus-form">
            <div className="contactus-input-box">
              <span>Full name</span>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="contactus-input-box">
              <span>Email</span>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="contactus-input-box">
              <span>Subject</span>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && <p className="error">{errors.subject}</p>}
            </div>
            <div className="contactus-input-box">
              <span>Message</span>
              <textarea
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <div className="contactus-btn">
              <button onClick={AddMessage}>
                {loading ? <ClockLoader size={20} color="white" /> : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContectUs;


