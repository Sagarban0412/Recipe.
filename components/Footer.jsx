import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-800 text-gray-300 py-6">
        <div class="container mx-auto text-center">
          <p class="text-sm">
            &copy; 2025 YourCompanyName. All rights reserved.
          </p>
          <div class="mt-4 flex justify-center space-x-4">
            <a href="/privacy-policy" class="hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms-of-service" class="hover:text-white">
              Terms of Service
            </a>
            <a href="/contact-us" class="hover:text-white">
              Contact Us
            </a>
          </div>
          <div class="mt-4">
            <p class="text-sm">Follow us on:</p>
            <div class="flex justify-center space-x-3 mt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                class="hover:text-white"
              >
                Twitter
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                class="hover:text-white"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                class="hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
