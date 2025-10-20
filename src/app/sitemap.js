// This file will automatically generate a sitemap.xml for your site

import { projectList } from "@/Utlits/projectList";
import { blogsList } from "@/Utlits/blogList";
import { serviceData } from "@/Utlits/serviceData";

export default function sitemap() {
  const baseUrl = "https://moon-bd.com";

  // Get routes for projects
  const projectUrls = projectList.map(project => ({
    url: `${baseUrl}/portfolio-details/${project.id}`,
    lastModified: new Date(),
  }));

  // Get routes for blogs
  const blogUrls = blogsList.map(blog => ({
    url: `${baseUrl}/blog-details/${blog.id}`,
    lastModified: new Date(),
  }));

  // Get routes for services
  const serviceUrls = serviceData.map(service => ({
    url: `${baseUrl}/service-details/${service.id}`,
    lastModified: new Date(),
  }));

  // Get static routes
  const staticUrls = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/portfolio`, lastModified: new Date() },
    { url: `${baseUrl}/all-blog`, lastModified: new Date() },
    { url: `${baseUrl}/all-services`, lastModified: new Date() },
  ];

  return [...staticUrls, ...projectUrls, ...blogUrls, ...serviceUrls];
}
