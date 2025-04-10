# Resume Portfolio

This is a personal resume/portfolio website built with React.js and Node.js Express.

## Deployment Instructions for Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. During deployment setup:
   - Set the root directory to `/`
   - Set the build command to `npm run build --prefix client`
   - Set the output directory to `client/build`

## Environment Variables for Vercel

To enable email functionality for the contact form, add these environment variables in the Vercel dashboard:

- `GOOGLE_EMAIL`: Your Gmail email address
- `GOOGLE_PASS`: Your Gmail app password (or regular password)

### How to create a Gmail App Password:

1. Go to your Google Account > Security
2. Under "Signing in to Google", select 2-Step Verification
3. At the bottom of the page, select App passwords
4. Select the app and device you want to generate the app password for
5. Follow the instructions to generate the app password
6. Use this app password in the `GOOGLE_PASS` environment variable

## Local Development

1. Clone this repository
2. Create a `.env` file in the root directory with the following:
   ```
   PORT=5001
   NODE_ENV=development
   GOOGLE_EMAIL=your-email@gmail.com
   GOOGLE_PASS=your-app-password
   ```
3. Install dependencies:
   ```
   npm install
   cd client
   npm install
   cd ..
   ```
4. Run the development server:
   ```
   npm run dev
   ```

This will start both the backend server and the React development server concurrently.
