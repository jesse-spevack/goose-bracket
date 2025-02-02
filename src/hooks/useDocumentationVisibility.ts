'use client';

import { useState, useEffect } from 'react';
import { loadDocsVisibility, saveDocsVisibility } from '../utils/storageUtils';

export const useDocumentationVisibility = () => {
  const [isDocsVisible, setIsDocsVisible] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedDocsVisibility = loadDocsVisibility();
    setIsDocsVisible(savedDocsVisibility);
  }, []);

  useEffect(() => {
    if (isClient) {
      saveDocsVisibility(isDocsVisible);
    }
  }, [isDocsVisible, isClient]);

  const toggleDocs = () => setIsDocsVisible(prev => !prev);

  return {
    isDocsVisible: isClient ? isDocsVisible : true,
    toggleDocs
  };
};
