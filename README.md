# pfau-software Website Repository

This is the repository used to host the pfau-software website. The source code for the website is located in a private repository.

## Purpose

- This repository hosts the produced pages and assets of the pfau-software website.
- The provided contents and resources are stored in the "production" branch.

## Deployment

To bring the latest changes to the website, you need to follow these steps:

1. **Build**: Ensure that the current outputs are generated using the build process.

2. **Deploy**: Use the following command to upload the generated pages and assets to the "production" branch:

   ```sh
   yarn deploy
   # or
   npm run deploy

## Workspace
1. wb yarn build
2. git add -A
3. git commit -m "new version of web pages"
4. git push
5. yarn deploy
