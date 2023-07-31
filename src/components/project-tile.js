import { useEffect } from "react";

function ProjectTile({ href, img, title, id }) {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the scrolling and trigger animations
    function handleScrollAnimations() {
        const projectTiles = document.querySelectorAll(".project-tile");
        var ele = 2;
        projectTiles.forEach((tile) => {
            if (isElementInViewport(tile)) {
                tile.classList.add("animate__slideInLeft");
                tile.classList.add("visible");
                tile.classList.remove("project-tile-anim");
            }
            if (ele === 0) {
                ele = 2;
            } else {
                ele = ele - 1;
            }
        });
    }

    // Event listener for scroll events
    window.addEventListener("scroll", handleScrollAnimations);

    
    useEffect(() => {
        // Initial check to see if any project-tile is already in the viewport when the page loads
        handleScrollAnimations();
      });

    return (
        <a className="project-tile animate__animated project-tile-anim" href={href} target="_blank" rel="noreferrer">
            <img src={img} alt={`Project ${id}`} className="project-image" />
            <h2>
                <p> ~ &nbsp;</p>
                {title}
                <p>&nbsp; ~ </p>
            </h2>
        </a>
    );
}

export default ProjectTile;
