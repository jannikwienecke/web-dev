
# use Cypress provided image with all dependencies included
FROM cypress/included:10.1.0
ENTRYPOINT ["/bin/bash"]
RUN node --version
RUN npm --version

# avoid too many progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1

# disable shared memory X11 affecting Cypress v4 and Chrome
# https://github.com/cypress-io/cypress-docker-images/issues/270
ENV QT_X11_NO_MITSHM=1
ENV _X11_NO_MITSHM=1
ENV _MITSHM=0
# point Cypress at the /root/cache no matter what user account is used
# see https://on.cypress.io/caching
ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress
RUN npm install -g "cypress@10.1.0"
RUN cypress verify

ENV CYPRESS_CACHE_FOLDER=/root/.cache/Cypress

# Cypress cache and installed version
# should be in the root user's home folder
RUN cypress cache path
RUN cypress cache list
RUN cypress info

# give every user read access to the "/root" folder where the binary is cached
# we really only need to worry about the top folder, fortunately
RUN ls -la /root
RUN chmod 755 /root

FROM gitpod/workspace-full-vnc

ENV CYPRESS_CACHE_FOLDER=/workspace/.cypress-cache

# Install Cypress dependencies.
RUN sudo apt-get update \
    && sudo DEBIAN_FRONTEND=noninteractive apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb \
    && sudo rm -rf /var/lib/apt/lists/*

RUN echo  " node version:    $(node -v) \n" \
    "npm version:     $(npm -v) \n" \
    "yarn version:    $(yarn -v) \n" \
    "debian version:  $(cat /etc/debian_version) \n" \
    "Chrome version:  $(google-chrome --version) \n" \
    "Firefox version: $(firefox --version) \n" \
    "git version:     $(git --version) \n" \
    "whoami:          $(whoami) \n"