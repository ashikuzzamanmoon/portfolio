'use client'
import { useEffect } from 'react'
import "aos/dist/aos.css";

const AddAnimation = () => {
    useEffect(() => {
        import("aos").then((module) => {
            const AOS = module.default || module;
            AOS.init({ once: true });
        });
    }, []);
    return null;
}

export default AddAnimation;