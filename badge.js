(function replitBadge(position = 'bottom-left') {
  // Suppress badge in ReplView
  if (window.location.hostname.split('.')[1] === 'id') {
    return;
  }

  // define positions
  // helps reduce polluting css classes
  const offset = '1.5rem';
  const validPositions = {
    'top-left': { top: offset, left: offset },
    'top-right': { top: offset, right: offset },
    'bottom-left': { bottom: offset, left: offset },
    'bottom-right': { bottom: offset, right: offset },
  };

  // ensure positions are valid
  if (!validPositions.hasOwnProperty(position)) {
    console.warn(
      `${position} is not a valid position, defaulting to bottom-left`,
    );
    position = 'bottom-left';
  }

  // create link & styles
  const badgeAnchor = document.createElement('a');
  Object.assign(badgeAnchor, {
    target: '_blank',
    href: 'https://instagram.com/parvcodes',
  });

  // create badge image & styles
  const badgeImage = document.createElement('img');
  badgeImage.src = `https://img.shields.io/badge/Built%20By-Parv%20Ashwani-orange?style=plastic&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADPklEQVR4nO2aS0hUURjHRzNyUS19UGmLMkpahJuyIKLoQdEi22RQ0aIHvTa1KFuEBNkmoteiokA32sYiqoVWoGJZ2gNCo7JAbZMFLSTJjF8c/A8Mzp1xLvOdcZF/cHPnnN/v+5w7c+85dyKRqfyHAWYBi4G1wC7gJHAJaASeAwPAMPDajZmMAqcDc4EVwDbgKFAD1AJPgB5giHAZBhZmqoFSoAn4k2JxQ2rqKVAHnFfTFUA5ME/vWr3Gn81EE3OA7xKOAl+BDuAucBmo0umzDlgCzA7BrhD3gd8uxmRXJLsfpsgU2QvEHrDkxgrygNvAIJnLoJx5lh/oLiYvna4Gi0Z2CvgBKDL576TmLQI+yl1pAXRvr8shkwrDuQ/LfcsC1i3YSpPqwrlXyf3OAvZTsMxcpGICLJL7RyTdACNMfn5bNNI62V0ALWk3EtPQW0HLzKCJXWVyvfEBvyd4hTk83rVdrkYf8IuCHzeHx7tOyHXBB/yY4FfN4fGua3Id8QHfKvhDc3i865FcW3zAlwrebQ6Pd/XIVeoD7hY+Lr+ArJjjm7VU7Qc2heAFzgOy5HCZad6IJNHb+MKYY66QaPpCsALnAYU69s1HD1HJC0nKJyoojUbKdazDRw9RScP422p3WqioPmBjCFbgPKBSjnofPUQlbtPApcqj47Qc5yIeJQckueHRcVOOfRGPkg2SNCcZ0w68DFprA/l6rTXJ/GY51lvWPl5SIklvkjGvNOazzndXfIGWzF/0WmeS+b3e1z9ALvBXa5ScBGPytQ2aKM8S7YwAOWI7xwxvjUjmLmIuxUnGZAO7dZoN6a9dG3fZSeYVi93vrYEJFlqtxrwW26qDxXWW4gSN1NpWHSyulqzaI/uMNTtItleyOo/v9h5rdpBsjWRtHthtYq+2ZgfJ5if4Wm013KEp9lN98Hd92h/4BI2MANP8VB9fgLtqu5R42FX8ZMVMRfrY+n7I3cozliYrZpg71P2GzINiXrdihlkz1HhY65yyYoZ5+NNgyLwj5g4rZipS83W11ikuy62YqUijOx3uMXWu0fIg+si7wKbK1MRZeqZonfcZa2Lc1n+XfjSQbkb19HZZxhuZylQiSfMP5/tWPGWZfBMAAAAASUVORK5CYII=`;
  badgeImage.id = 'replitBadge';
  Object.assign(badgeImage.style, validPositions[position]);

  // inject styles
  document.head.insertAdjacentHTML(
    'beforeend',
    `
    <style>
      #replitBadge {
        position: fixed;
        cursor: pointer;
        z-index: 100;
        transition: transform 100ms ease-in-out;
      }

      #replitBadge:hover {
        transform: scale(1.05);
      }
    </style>
  `,
  );

  // append badge to page
  badgeAnchor.appendChild(badgeImage);
  document.body.appendChild(badgeAnchor);
})(
  document.currentScript.getAttribute('position'),
);