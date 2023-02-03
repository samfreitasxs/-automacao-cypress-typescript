FROM cypress/included:10.6.0
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./tsconfig.json .
COPY ./package-lock.json .
COPY ./cypress.config.ts .
COPY ./cypress ./cypress
RUN npm config set unsafe-perm true
RUN npm config set "strict-ssl" false
RUN npm install 
ENTRYPOINT ["npm", "run"]