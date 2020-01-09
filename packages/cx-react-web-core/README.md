# to publish package to npm,
npm login
export PATH=$PATH:/Users/oakkyaw/.npm-global/bin
np

# to consume the package locally from cx-react-client
cx-react-web-core>yarn build
cx-react-web-core>yarn link
cx-react-client>yarn link "@connacx/react-web-core"
cx-react-client>yarn start

Everytime there is changes in cx-react-web-core, do yarn build again. But, linking is only one time.