import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Upload, X, Check, Zap, Waves, Utensils, DoorOpen, MapPin, ArrowLeft, ArrowRight, Home, Plus, Home as HomeIcon } from 'lucide-react';
import Navbar from '../components/Navbar';

const steps = [
  { id: 1, label: 'Info', icon: '01' },
  { id: 2, label: 'Details', icon: '02' },
  { id: 3, label: 'Media', icon: '03' },
  { id: 4, label: 'Review', icon: '04' },
];

const categories = ['Mini-flats', 'Self-contain', 'Bungalows', 'Penthouses', 'Shortlets', 'Detached', 'Semi-Detached'];
const conditions = ['Newly Built', 'Renovated', 'Fairly Used', 'Old'];
const amenitiesList = ['24/7 Power', 'Swimming Pool', 'Fitted Kitchen', 'En-suite', 'Security', 'Parking', 'CCTV', 'Garden'];
const documentTypes = ['C of O', 'Governors Consent', 'Survey', ' Deed of Assignment'];

export default function PostProperty() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    priceType: 'total',
    location: '',
    bedrooms: 0,
    toilets: 0,
    parking: 0,
    squareFeet: '',
    condition: 'Newly Built',
    amenities: [] as string[],
    images: [] as string[],
    documentType: '',
    description: '',
  });

  const updateForm = (field: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleAmenity = (amenity: string) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      updateForm('images', [...formData.images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    updateForm('images', formData.images.filter((_, i) => i !== index));
  };

  const canProceed = () => {
    if (currentStep === 1) return formData.title && formData.category && formData.price && formData.location;
    if (currentStep === 2) return formData.bedrooms >= 0;
    if (currentStep === 3) return formData.images.length >= 3;
    if (currentStep === 4) return formData.documentType;
    return false;
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      title: '',
      category: '',
      price: '',
      priceType: 'total',
      location: '',
      bedrooms: 0,
      toilets: 0,
      parking: 0,
      squareFeet: '',
      condition: 'Newly Built',
      amenities: [],
      images: [],
      documentType: '',
      description: '',
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0a0a0f] font-sans">
      <Navbar />
      
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
        {!isSubmitted && (
          <div className="mb-8">
            <div className="flex items-center justify-between gap-2">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1">
                  <div className="flex flex-col items-center w-full">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all z-10 ${
                        currentStep >= step.id
                          ? 'bg-[#0066FF] text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {currentStep > step.id ? <Check className="w-5 h-5" /> : step.icon}
                    </div>
                    <span className={`mt-2 text-xs sm:text-sm font-medium ${currentStep >= step.id ? 'text-[#0066FF]' : 'text-gray-400'}`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-1 ${currentStep > step.id ? 'bg-[#0066FF]' : 'bg-gray-200 dark:bg-gray-700'}`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-[#1a1a1f] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-4 sm:p-8">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-[#10B981]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-[#10B981]" />
              </div>
              <h2 className="text-2xl font-bold text-[#111827] dark:text-white mb-3">Property Submitted!</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm sm:text-base">
                Your property has been submitted successfully. Our team will review it and get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-6 py-3 rounded-xl font-semibold bg-gray-100 dark:bg-gray-800 text-[#111827] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                >
                  <HomeIcon className="w-4 h-4" />
                  Go Home
                </button>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 rounded-xl font-semibold bg-[#0066FF] text-white hover:bg-[#0052d9] transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Submit Another
                </button>
              </div>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white mb-6">Basic Information</h2>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Property Title *</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => updateForm('title', e.target.value)}
                        placeholder="e.g., Luxury 4 Bedroom Terrace in Lekki"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0a0f] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all text-[#111827] dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Location *</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => updateForm('location', e.target.value)}
                          placeholder="e.g., Lekki, Lagos"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0a0f] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all text-[#111827] dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category *</label>
                        <div className="relative">
                          <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                          <select
                            value={formData.category}
                            onChange={(e) => updateForm('category', e.target.value)}
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0a0f] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all text-[#111827] dark:text-white appearance-none cursor-pointer"
                          >
                            <option value="">Select type</option>
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price *</label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₦</span>
                          <input
                            type="number"
                            value={formData.price}
                            onChange={(e) => updateForm('price', e.target.value)}
                            placeholder="0"
                            className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0a0f] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all text-[#111827] dark:text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price Type</label>
                      <div className="flex gap-2">
                        <button
                          onClick={() => updateForm('priceType', 'total')}
                          className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                            formData.priceType === 'total'
                              ? 'bg-[#0066FF] text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          Total Sale
                        </button>
                        <button
                          onClick={() => updateForm('priceType', 'annum')}
                          className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                            formData.priceType === 'annum'
                              ? 'bg-[#0066FF] text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          Per Year
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white mb-6">Property Details</h2>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Bedrooms</label>
                      <div className="flex items-center justify-center gap-2 sm:gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl py-3 sm:py-4">
                        <button
                          onClick={() => updateForm('bedrooms', Math.max(0, formData.bedrooms - 1))}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white w-6 sm:w-8">{formData.bedrooms}</span>
                        <button
                          onClick={() => updateForm('bedrooms', formData.bedrooms + 1)}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="text-center">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Toilets</label>
                      <div className="flex items-center justify-center gap-2 sm:gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl py-3 sm:py-4">
                        <button
                          onClick={() => updateForm('toilets', Math.max(0, formData.toilets - 1))}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white w-6 sm:w-8">{formData.toilets}</span>
                        <button
                          onClick={() => updateForm('toilets', formData.toilets + 1)}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="text-center">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Parking</label>
                      <div className="flex items-center justify-center gap-2 sm:gap-4 bg-gray-50 dark:bg-gray-800 rounded-xl py-3 sm:py-4">
                        <button
                          onClick={() => updateForm('parking', Math.max(0, formData.parking - 1))}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white w-6 sm:w-8">{formData.parking}</span>
                        <button
                          onClick={() => updateForm('parking', formData.parking + 1)}
                          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:border-[#0066FF] hover:text-[#0066FF] transition-all"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Condition</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {conditions.map((cond) => (
                        <button
                          key={cond}
                          onClick={() => updateForm('condition', cond)}
                          className={`py-3 px-3 sm:px-4 rounded-xl text-sm font-medium transition-all ${
                            formData.condition === cond
                              ? 'bg-[#0066FF] text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          {cond}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Amenities</label>
                    <div className="grid grid-cols-2 gap-2">
                      {amenitiesList.map((amenity) => (
                        <button
                          key={amenity}
                          onClick={() => toggleAmenity(amenity)}
                          className={`py-3 px-4 rounded-xl text-sm font-medium transition-all flex items-center gap-2 justify-center ${
                            formData.amenities.includes(amenity)
                              ? 'bg-[#0066FF] text-white'
                              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                          }`}
                        >
                          {amenity === '24/7 Power' && <Zap className="w-4 h-4" />}
                          {amenity === 'Swimming Pool' && <Waves className="w-4 h-4" />}
                          {amenity === 'Fitted Kitchen' && <Utensils className="w-4 h-4" />}
                          {amenity === 'En-suite' && <DoorOpen className="w-4 h-4" />}
                          {amenity === 'Security' && <span className="text-[10px]">🛡️</span>}
                          {amenity === 'Parking' && <span className="text-[10px]">🚗</span>}
                          {amenity === 'CCTV' && <span className="text-[10px]">📹</span>}
                          {amenity === 'Garden' && <span className="text-[10px]">🌳</span>}
                          <span className="hidden sm:inline">{amenity}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white mb-2">Media Upload</h2>
                  <p className="text-sm text-gray-500 mb-6">Upload at least 3 photos of your property</p>

                  <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6 sm:p-10 text-center hover:border-[#0066FF] transition-colors cursor-pointer relative">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">Tap to upload photos</p>
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">or drag and drop</p>
                  </div>

                  {formData.images.length > 0 && (
                    <div className="mt-6">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">{formData.images.length} photos uploaded</p>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {formData.images.map((img, index) => (
                          <div key={index} className="relative aspect-square rounded-xl overflow-hidden group">
                            <img src={img} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                            <button
                              onClick={() => removeImage(index)}
                              className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-white mb-6">Verification</h2>

                  <div className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl mb-6">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 bg-[#0066FF]/10 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-5 h-5 text-[#0066FF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#111827] dark:text-white text-sm sm:text-base">Get Verified Badge</h3>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Upload title documents for more visibility</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title Documents</label>
                    <select
                      value={formData.documentType}
                      onChange={(e) => updateForm('documentType', e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0a0a0f] focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20 outline-none transition-all text-[#111827] dark:text-white"
                    >
                      <option value="">Select document</option>
                      {documentTypes.map((doc) => (
                        <option key={doc} value={doc}>{doc}</option>
                      ))}
                    </select>
                  </div>

                  <div className="p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                    <h3 className="font-semibold text-[#111827] dark:text-white mb-4 text-sm sm:text-base">Summary</h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div><span className="text-gray-500">Title:</span> <span className="font-medium text-[#111827] dark:text-white">{formData.title || '-'}</span></div>
                      <div><span className="text-gray-500">Location:</span> <span className="font-medium text-[#111827] dark:text-white">{formData.location || '-'}</span></div>
                      <div><span className="text-gray-500">Price:</span> <span className="font-medium text-[#111827] dark:text-white">₦{formData.price || '0'} {formData.priceType === 'annum' ? '/yr' : ''}</span></div>
                      <div><span className="text-gray-500">Bedrooms:</span> <span className="font-medium text-[#111827] dark:text-white">{formData.bedrooms}</span></div>
                      <div><span className="text-gray-500">Toilets:</span> <span className="font-medium text-[#111827] dark:text-white">{formData.toilets}</span></div>
                      <div><span className="text-gray-500">Photos:</span> <span className="font-medium text-[#111827] dark:text-white">{formData.images.length}</span></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>

        {!isSubmitted && (
          <div className="flex justify-between gap-3 mt-6">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className={`flex-1 sm:flex-none py-3.5 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                currentStep === 1
                  ? 'text-gray-300 dark:text-gray-600 cursor-not-allowed'
                  : 'bg-white dark:bg-[#1a1a1f] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </button>

            {currentStep < 4 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={!canProceed()}
                className={`flex-1 sm:flex-none py-3.5 px-8 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                  canProceed()
                    ? 'bg-[#0066FF] text-white hover:bg-[#0052d9]'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 sm:flex-none py-3.5 px-8 rounded-xl font-semibold bg-[#10B981] text-white hover:bg-[#059669] transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Submit</span>
                  </>
                )}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}