import React from 'react';

const SubFooter = () => {
    return (
        <div>
           <footer className="footer sm:footer-horizontal items-center bg-blue-900 text-white p-10 border-t ">
  <aside className="grid-flow-col items-center">
    
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a>
      Privacy policy
    </a>
    <a>
      Terms of Service
    </a>
    <a>
      Cookies
    </a>
  </nav>
</footer>
        </div>
    );
};

export default SubFooter;