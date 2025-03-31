# Rental-HouseX

Rental-HouseX is a full-featured real estate platform built with Next.js, providing a seamless experience for users to browse, list, and manage properties. The platform includes authentication, property management, messaging, and interactive mapping features.

## Demo
- [https://rental-housex.vercel.app/](https://rental-housex.vercel.app/).


## Features

- **User Authentication & Authorization**
  - Google authentication via NextAuth.js
  - Route protection to secure pages
- **Property Management**
  - Create, update, and delete property listings
  - Upload multiple property images via Cloudinary
  - Bookmark/saved properties
  - Share properties on social media
- **User Profile & Listings**
  - Manage personal listings
  - View and edit profile
- **Search & Navigation**
  - Property search functionality
  - Interactive maps with Mapbox & React Map GL
- **Messaging & Notifications**
  - Internal messaging system
  - Unread message notifications
  - Toast notifications for actions
- **UI & User Experience**
  - Photoswipe image gallery
  - Loading spinners for better user experience
  - Custom 404 page
  - Responsive design using Tailwind CSS

## Technologies Used

Rental-HouseX leverages modern web technologies to deliver an efficient and scalable experience:

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: MongoDB, Mongoose
- **Authentication**: NextAuth.js
- **UI Components**: React Icons, Photoswipe, React Spinners, React Toastify
- **Image Handling**: Cloudinary
- **Maps & Geolocation**: Mapbox, React Map GL, React Geocode
- **Social Sharing**: React Share

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/yourusername/property-pulse.git
   cd property-pulse
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in the root directory and configure the necessary variables such as:
     ```env
     NEXTAUTH_URL=your_domain
     MONGODB_URI=your_mongodb_connection_string
     CLOUDINARY_URL=your_cloudinary_api
     MAPBOX_API_KEY=your_mapbox_api_key
     ```

4. Run the development server:

   ```sh
   npm run dev
   ```

   The app will be available at [https://rental-housex.vercel.app/](https://rental-housex.vercel.app/).

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

## Contact

For any questions or support, feel free to reach out or open an issue on GitHub.

---

Enjoy using **Rental-HouseX**! 🚀

