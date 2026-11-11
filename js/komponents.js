export const komponents = {
    "accordion": {
        "basic": `<div class="accordion" id="accordionExample">
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin
                    adds the appropriate classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin
                    adds the appropriate classes that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the
                    <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
        </div>
    </div>`
    },
    "alert": {
        "alert-dafult": 
        `<div class="alert" role="alert"></div>`,
        "alert-link": {
            "primary": 
            `<div class="alert alert-primary" role="alert">
                A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            </div>`,
            "secondary": 
            `<div class="alert alert-secondary" role="alert">
                A simple secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            </div>`,
            "succes":
            `<div class="alert alert-success" role="alert">
                A simple success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            </div>`,
            "danger": 
            `<div class="alert alert-danger" role="alert">
                A simple danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            </div>`,
            "warning": 
            `<div class="alert alert-warning" role="alert">
                A simple warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            </div>`,
            "info": 
            `<div class="alert alert-info" role="alert">
                A simple info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            </div>`,
            "light":
            `<div class="alert alert-light" role="alert">
                A simple light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            </div>`,
            "dark":
            `<div class="alert alert-dark" role="alert">
                A simple dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
            </div>`
        },
        "alert-icons": {
            "primary": 
            `<div class="alert alert-primary d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" role="img" aria-label="Info:">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
            </svg>
            <div>
                An example alert with an icon
            </div>
            </div>`,
            "succes": 
            `<div class="alert alert-success d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" role="img" aria-label="Success:">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
            <div>
                An example success alert with an icon
            </div>
            </div>`,
            "warning": 
            `<div class="alert alert-warning d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                An example warning alert with an icon
            </div>
            </div>`,
            "danger": 
            `<div class="alert alert-danger d-flex align-items-center" role="alert">
            <svg class="bi flex-shrink-0 me-2" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" role="img" aria-label="Danger:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>
                An example danger alert with an icon
            </div>
            </div>`,
        },
    },
    "badge": {
        "secondary": `<span class="badge text-bg-secondary">New</span>`,
        "primary": `<span class="badge text-bg-primary">Primary</span>`,
        "succes": `<span class="badge text-bg-success">Success</span>`,
        "danger": `<span class="badge text-bg-danger">Danger</span>`,
        "warning": `<span class="badge text-bg-warning">Warning</span>`,
        "info": `<span class="badge text-bg-info">Info</span>`,
        "light": `<span class="badge text-bg-light">Light</span>`,
        "dark": `<span class="badge text-bg-dark">Dark</span>`,
        "buttons": `<button type="button" class="btn btn-primary">Notifications <span class="badge text-bg-secondary">4</span></button>`,
        "positioned": 
        `<button type="button" class="btn btn-primary position-relative">
        Inbox
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span class="visually-hidden">unread messages</span>
        </span>
        </button>`,
        "pill-badges": {
            "primary": `<span class="badge rounded-pill text-bg-primary">Primary</span>`,
            "secondary": `<span class="badge rounded-pill text-bg-secondary">Secondary</span>`,
            "success": `<span class="badge rounded-pill text-bg-success">Success</span>`,
            "danger": `<span class="badge rounded-pill text-bg-danger">Danger</span>`,
            "warning": `<span class="badge rounded-pill text-bg-warning">Warning</span>`,
            "info": `<span class="badge rounded-pill text-bg-info">Info</span>`,
            "light": `<span class="badge rounded-pill text-bg-light">Light</span>`,
            "dark": `<span class="badge rounded-pill text-bg-dark">Dark</span>`
        }
    },
    "breadcrumb": {
        "basic": `<nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
        </nav>`
    },
    "buttons": {
        "basic": `<button type="button" class="btn">Base class</button>`,
        "variants": {
            "primary": `<button type="button" class="btn btn-primary">Primary</button>`,
            "secondary": `<button type="button" class="btn btn-secondary">Secondary</button>`,
            "success": `<button type="button" class="btn btn-success">Success</button>`,
            "danger": `<button type="button" class="btn btn-danger">Danger</button>`,
            "warning": `<button type="button" class="btn btn-warning">Warning</button>`,
            "info": `<button type="button" class="btn btn-info">Info</button>`,
            "light": `<button type="button" class="btn btn-light">Light</button>`,
            "dark": `<button type="button" class="btn btn-dark">Dark</button>`,
            "link": `<button type="button" class="btn btn-link">Link</button>`
        },
        "outline": {
            "primary": `<button type="button" class="btn btn-outline-primary">Primary</button>`,
            "secondary": `<button type="button" class="btn btn-outline-secondary">Secondary</button>`,
            "success": `<button type="button" class="btn btn-outline-success">Success</button>`,
            "danger": `<button type="button" class="btn btn-outline-danger">Danger</button>`,
            "warning": `<button type="button" class="btn btn-outline-warning">Warning</button>`,
            "info": `<button type="button" class="btn btn-outline-info">Info</button>`,
            "light": `<button type="button" class="btn btn-outline-light">Light</button>`,
            "dark": `<button type="button" class="btn btn-outline-dark">Dark</button>`
        },
        "toogle states": {
            "toggle-link": `<a href="#" class="btn btn-primary" role="button" data-bs-toggle="button">Toggle link</a>`,
            "active-toggle-link": `<a href="#" class="btn btn-primary active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>`,
            "disabled-toggle-link": `<a class="btn btn-primary disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>`,
            "basic-toggle-link": `<a href="#" class="btn" role="button" data-bs-toggle="button">Toggle link</a>`,
            "basic-active-toggle-link": `<a href="#" class="btn active" role="button" data-bs-toggle="button" aria-pressed="true">Active toggle link</a>`,
            "basic-disabled-toggle-link": `<a class="btn disabled" aria-disabled="true" role="button" data-bs-toggle="button">Disabled toggle link</a>`
        },
    },
    "buttons group": {
        "basic": `<div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-primary">Left</button>
            <button type="button" class="btn btn-primary">Middle</button>
            <button type="button" class="btn btn-primary">Right</button>
        </div>`,
        "outline": 
        `<div class="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" class="btn btn-outline-primary">Left</button>
            <button type="button" class="btn btn-outline-primary">Middle</button>
            <button type="button" class="btn btn-outline-primary">Right</button>
        </div>`,
        "button toolbar": 
        `<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group me-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-primary">1</button>
                <button type="button" class="btn btn-primary">2</button>
                <button type="button" class="btn btn-primary">3</button>
                <button type="button" class="btn btn-primary">4</button>
            </div>
            <div class="btn-group me-2" role="group" aria-label="Second group">
                <button type="button" class="btn btn-secondary">5</button>
                <button type="button" class="btn btn-secondary">6</button>
                <button type="button" class="btn btn-secondary">7</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-info">8</button>
            </div>
        </div>`,
        "vertical button group":  
        `<div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
            <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked>
            <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>
            <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off">
            <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
            <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off">
            <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
        </div>`
    },
    "cards": {
        "basic": 
        `<div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`,
        "card header": 
        `<div class="card">
            <h5 class="card-header">Featured</h5>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`,
        "quote": 
        `<div class="card">
            <div class="card-header">
                Quote
            </div>
            <div class="card-body">
                <figure>
                <blockquote class="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
                </figure>
            </div>
        </div>`,
        "card header footer": 
        `<div class="card text-center">
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            <div class="card-footer text-body-secondary">
                2 days ago
            </div>
        </div>`,
        "horizontal": 
        `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
            </div>
        </div>
        </div>`,
        "color variants": {
            "primary": `<div class="card text-bg-primary mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Primary card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "secondary": `<div class="card text-bg-secondary mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Secondary card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "success": `<div class="card text-bg-success mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Success card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "danger": `<div class="card text-bg-danger mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Danger card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "warning": `<div class="card text-bg-warning mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Warning card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "info": `<div class="card text-bg-info mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Info card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "light": `<div class="card text-bg-light mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Light card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "dark": `<div class="card text-bg-dark mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Dark card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`
        },
        "border": {
            "primary": `<div class="card border-primary mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body text-primary">\n    <h5 class="card-title">Primary card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "secondary": `<div class="card border-secondary mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body text-secondary">\n    <h5 class="card-title">Secondary card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "success": `<div class="card border-success mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body text-success">\n    <h5 class="card-title">Success card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "danger": `<div class="card border-danger mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body text-danger">\n    <h5 class="card-title">Danger card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "warning": `<div class="card border-warning mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Warning card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "info": `<div class="card border-info mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Info card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "light": `<div class="card border-light mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Light card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`,
            "dark": `<div class="card border-dark mb-3" style="max-width: 18rem;">\n  <div class="card-header">Header</div>\n  <div class="card-body">\n    <h5 class="card-title">Dark card title</h5>\n    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>\n  </div>\n</div>`
        },
        "card-groups": {
            "basic": 
            `<div class="card-group">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>`,
        }
    },
    "courusel": {
        "basic": 
        `<div id="carouselExample" class="carousel slide">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`,
        "indicators":
        `<div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`,
        "captions": 
        `<div id="carouselExampleCaptions" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`,
        "crossfade": 
        `<div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`,
        "autoplaying carousels": 
        `<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>`,
        "autoplaying carousels without controls": 
        `<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                <img src="..." class="d-block w-100" alt="...">
                </div>
            </div>
        </div>`,
    },
    "close button": {
        "basic": `<button type="button" class="btn-close" aria-label="Close"></button>`
    },
    "collapse": {
        "basic": 
        `<p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a>
        </p>
        <div class="collapse" id="collapseExample">
        <div class="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
        </div>
        </div>`,
        "horizontal": 
        `<p>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
            Toggle width collapse
        </button>
        </p>
        <div style="min-height: 120px;">
        <div class="collapse collapse-horizontal" id="collapseWidthExample">
            <div class="card card-body" style="width: 300px;">
            This is some placeholder content for a horizontal collapse. It’s hidden by default and shown when triggered.
            </div>
        </div>
        </div>`,
    },
    "dropdown": {
        "basic": 
        `<div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
        </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
        </div>`,
        "split button": `<div class="btn-group">
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="visually-hidden">Toggle Dropdown</span>
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Separated link</a></li>
            </ul>
        </div>`
    },
    "list group": {
        "basic": 
        `<ul class="list-group">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
        </ul>`,
        "flush": 
        `<ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
        </ul>`,
        "numbered": 
        `<ol class="list-group list-group-numbered">
            <li class="list-group-item">A list item</li>
            <li class="list-group-item">A list item</li>
            <li class="list-group-item">A list item</li>
        </ol>`,
        "checkboxes": 
        `<ul class="list-group">
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckbox">
                <label class="form-check-label" for="firstCheckbox">First checkbox</label>
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckbox">
                <label class="form-check-label" for="secondCheckbox">Second checkbox</label>
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox">
                <label class="form-check-label" for="thirdCheckbox">Third checkbox</label>
            </li>
        </ul>`,
        "radio": `<ul class="list-group">
            <li class="list-group-item">
                <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="firstRadio" checked>
                <label class="form-check-label" for="firstRadio">First radio</label>
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="secondRadio">
                <label class="form-check-label" for="secondRadio">Second radio</label>
            </li>
            <li class="list-group-item">
                <input class="form-check-input me-1" type="radio" name="listGroupRadio" value="" id="thirdRadio">
                <label class="form-check-label" for="thirdRadio">Third radio</label>
            </li>
        </ul>`
    },
    "navbar": {
        "basic": 
        `<nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>`,
        "full": 
        `<nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
        </nav>`,
        "brand": 
        `<nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
            </div>
        </nav>`,
        "form navbar": 
        `<nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">Navbar</a>
                <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>`
    },
    "navs": {
        "basic": 
        `<ul class="nav justify-content-center">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>`,
        "left aligment": `<nav class="nav">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </nav>`,
        "right aligment": 
        `<ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </li>
        </ul>`,
        "vertical": 
        `<nav class="nav flex-column">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link" href="#">Link</a>
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </nav>`
    },
    "pagination": {
        "basic": 
        `<nav aria-label="Page navigation example">
            <ul class="pagination">
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
        </nav>`
    },
    "form": {
        "basic": 
        `<form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>`
    },
    "select": {
        "basic": 
        `<select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>`
    },
    "checkbox": {
        "basic": 
        `<div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="checkDefault">
        <label class="form-check-label" for="checkDefault">
            Default checkbox
        </label>
        </div>`
    }
}
