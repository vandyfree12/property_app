import '@/assets/styles/global.css';


export const metadata={
  title:'Property Pulse|| Find the perfect rental',
  description:'This is for property',
  keywords: 'rental, find rentals ,find property',
};

const MainLayout = ({children}) => {
    return (
      <html lang='en'>
        <body>
          <div>{children}</div>
        </body>
      </html>
    );
  };
  
  export default MainLayout;