const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // The footer element itself handles the side padding (px-*)
    // It also needs a background if the glass card inside doesn't fully cover it or has transparency.
    <footer className="w-full mt-auto px-5 sm:px-6 lg:px-8 py-5 relative ">
      {/* Container for the logo and the glass content area */}
      <div className="flex items-center justify-between w-full">
        {/* Logo Icon on the far left - still absolute to the footer's padding context */}
        

        {/* This div IS the full-width glass effect. It sits *behind* the text content. */}
        {/* It stretches to the padded edges of the `footer` element. */}
        <div
          className="absolute inset-x-0 bottom-2 top-2 mx-4 sm:mx-6 lg:mx-8 z-0
                     bg-glass-bg backdrop-blur-md border-t border-glass-border rounded-xl"
          // NOTES:
          // inset-x-0 bottom-0 top-0: Makes it fill the parent `footer` vertically and horizontally.
          // mx-4 sm:mx-6 lg:mx-8: This makes it respect the overall page padding defined on the footer.
          // border-t: Only top border for the glass effect.
          // rounded-xl: Standard glass card rounding.
        ></div>

        {/* Centered TEXT CONTENT for the footer, sits ON TOP of the full-width glass div */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center py-1">
          {/* py-1 is minimal padding for the text itself within the glass area */}
          <p className="font-amiko text-xs text-off-white/70 mb-1">
            © {currentYear} MarkIt. All rights reserved.
          </p>
          <div className="flex justify-center items-center space-x-2 sm:space-x-3 text-xs text-off-white/50">
            {/* MODIFIED LINE BELOW */}
            <a href="mailto:justin@markittrade.com" className="hover:text-markit-orange transition-colors duration-200">Contact</a>
            <span className="opacity-50">|</span>
            <a href="#" className="hover:text-markit-orange transition-colors duration-200">Privacy</a>
          </div>
        </div>

        {/* Invisible spacer on the right to balance the absolute positioned logo */}
        <div className="absolute right-4 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-[28px] h-[28px] opacity-0" aria-hidden="true">
          {/* This ensures the central text content can be truly centered */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;