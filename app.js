const filesystemData = {
    name: "/",
    description: "The root directory of the entire filesystem hierarchy.",
    type: "system",
    icon: "root",
    children: [
        {
            name: "/bin",
            description: "Essential command binaries (ls, cp, cat).",
            type: "system",
            icon: "file-code"
        },
        {
            name: "/boot",
            description: "Static files of the boot loader (kernel, initrd).",
            type: "system",
            icon: "power"
        },
        {
            name: "/dev",
            description: "Device files representing hardware components.",
            type: "device",
            icon: "cpu"
        },
        {
            name: "/etc",
            description: "Host-specific system-wide configuration files.",
            type: "config",
            icon: "settings",
            children: [
                { name: "fstab", description: "Storage device mounting information.", type: "config", icon: "database" },
                { name: "passwd", description: "User account information.", type: "config", icon: "users" },
                { name: "shadow", description: "Secure user password information.", type: "config", icon: "shield" }
            ]
        },
        {
            name: "/home",
            description: "Users' personal directories and files.",
            type: "user",
            icon: "home",
            children: [
                { name: "/alice", description: "Home directory for user Alice.", type: "user", icon: "user" },
                { name: "/bob", description: "Home directory for user Bob.", type: "user", icon: "user" }
            ]
        },
        {
            name: "/lib",
            description: "Essential shared libraries for the binaries in /bin.",
            type: "system",
            icon: "book"
        },
        {
            name: "/media",
            description: "Mount points for removable media (USB, CD-ROM).",
            type: "device",
            icon: "hard-drive"
        },
        {
            name: "/opt",
            description: "Add-on application software packages.",
            type: "user",
            icon: "package"
        },
        {
            name: "/root",
            description: "Home directory for the root user.",
            type: "user",
            icon: "shield-alert"
        },
        {
            name: "/sbin",
            description: "System binaries for administrative tasks.",
            type: "system",
            icon: "terminal"
        },
        {
            name: "/tmp",
            description: "Temporary files (cleared on reboot).",
            type: "system",
            icon: "clock"
        },
        {
            name: "/usr",
            description: "User utilities and applications.",
            type: "system",
            icon: "folder",
            children: [
                { name: "/bin", description: "Non-essential user binaries.", type: "system", icon: "file-code" },
                { name: "/local", description: "Software installed locally by administrator.", type: "system", icon: "wrench" }
            ]
        },
        {
            name: "/var",
            description: "Variable data files (logs, databases, mail).",
            type: "user",
            icon: "activity",
            children: [
                { name: "/log", description: "System log files storage.", type: "user", icon: "file-text" },
                { name: "/mail", description: "User mailbox files.", type: "user", icon: "mail" }
            ]
        }
    ]
};

const icons = {
    root: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
    settings: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33 1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    home: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    user: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    users: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    terminal: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,
    cpu: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`,
    database: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    shield: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    "shield-alert": `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    package: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.28"></line><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22.76" x2="12" y2="12"></line><path d="M21 16.09v-8.45a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 5.91a2 2 0 0 0-1 1.73v8.45a2 2 0 0 0 1 1.73l7 3.64a2 2 0 0 0 2 0l7-3.64a2 2 0 0 0 1-1.73z"></path></svg>`,
    activity: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
    wrench: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    book: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
    folder: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>`,
    "file-text": `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
    clock: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    power: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>`,
    "file-code": `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    "hard-drive": `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></svg>`,
    mail: `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
};

// D3 Configuration
const margin = { top: 40, right: 120, bottom: 40, left: 120 };
const cardWidth = 240;
const cardHeight = 120;
const shadowPadding = 40; // Extra space for shadows and hover scales
const nodeSpacingX = 300;
const nodeSpacingY = 200;

document.addEventListener('DOMContentLoaded', () => {
    const svg = d3.select("#tree-svg");
    const container = svg.append("g").attr("class", "zoom-container");
    const gLinks = container.append("g").attr("class", "links");
    const gNodes = container.append("g").attr("class", "nodes");

    // Zoom behavior
    const zoom = d3.zoom()
        .scaleExtent([0.1, 3])
        .on("zoom", (event) => {
            container.attr("transform", event.transform);
        });

    svg.call(zoom);

    let root = d3.hierarchy(filesystemData);
    root.x0 = 0;
    root.y0 = 0;

    // Reset zoom and center root
    function resetView() {
        const viewport = document.querySelector('.tree-viewport');
        const viewportWidth = viewport.clientWidth;
        const viewportHeight = viewport.clientHeight || 800;

        svg.attr("width", viewportWidth);
        svg.attr("height", viewportHeight);

        svg.transition().duration(750).call(
            zoom.transform,
            d3.zoomIdentity.translate(viewportWidth / 2, 120).scale(0.9) // More top margin for shadows
        );
    }

    // Collapse all except root
    if (root.children) {
        root.children.forEach(collapse);
    }

    const treeLayout = d3.tree().nodeSize([nodeSpacingX, nodeSpacingY]);

    function collapse(d) {
        if (d.children) {
            d._children = d.children;
            d._children.forEach(collapse);
            d.children = null;
        }
    }

    function update(source) {
        const treeData = treeLayout(root);
        const nodes = treeData.descendants();
        const links = treeData.links();

        // Nodes
        const node = gNodes.selectAll("g.node")
            .data(nodes, d => d.data.name + (d.parent ? d.parent.data.name : "root"));

        const nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .attr("transform", d => `translate(${source.x0},${source.y0})`)
            .on("click", (event, d) => {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                } else {
                    d.children = d._children;
                    d._children = null;
                }
                update(d);
            });

        nodeEnter.append("foreignObject")
            .attr("width", cardWidth + shadowPadding * 2)
            .attr("height", cardHeight + shadowPadding * 2)
            .attr("x", -(cardWidth / 2 + shadowPadding))
            .attr("y", -(cardHeight / 2 + shadowPadding))
            .append("xhtml:div")
            .style("padding", `${shadowPadding}px`) // Provide space for the shadow
            .style("box-sizing", "border-box")
            .append("xhtml:div")
            .attr("class", "node-card")
            .html(d => `
                <div class="node-type-indicator type-${d.data.type}"></div>
                <div class="node-header">
                    <div class="node-icon">${icons[d.data.icon] || icons.folder}</div>
                    <span class="node-name">${d.data.name}</span>
                    ${(d.children || d._children) ? `
                        <div class="node-arrow" style="margin-left: auto;">
                            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" style="transition: transform 0.3s; transform: ${d.children ? 'rotate(180deg)' : 'rotate(0deg)'}">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    ` : ""}
                </div>
                <p class="node-desc">${d.data.description}</p>
            `);

        const nodeUpdate = nodeEnter.merge(node);

        nodeUpdate.transition()
            .duration(500)
            .attr("transform", d => `translate(${d.x},${d.y})`);

        // Update arrow rotation
        nodeUpdate.select(".node-arrow svg")
            .style("transform", d => d.children ? 'rotate(180deg)' : 'rotate(0deg)');

        const nodeExit = node.exit().transition()
            .duration(500)
            .attr("transform", d => `translate(${source.x},${source.y})`)
            .remove();

        // Links
        const link = gLinks.selectAll("path.link")
            .data(links, d => d.target.data.name + (d.target.parent ? d.target.parent.data.name : "root"));

        const linkEnter = link.enter().insert("path", "g")
            .attr("class", "link")
            .attr("d", d => {
                const o = { x: source.x0, y: source.y0 };
                return diagonal(o, o);
            });

        const linkUpdate = linkEnter.merge(link);

        linkUpdate.transition()
            .duration(500)
            .attr("d", d => diagonal(d.source, d.target));

        const linkExit = link.exit().transition()
            .duration(500)
            .attr("d", d => {
                const o = { x: source.x, y: source.y };
                return diagonal(o, o);
            })
            .remove();

        nodes.forEach(d => {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }

    function diagonal(s, t) {
        const midY = (s.y + t.y) / 2;
        return `M ${s.x} ${s.y}
                V ${midY}
                H ${t.x}
                V ${t.y}`;
    }

    document.getElementById('reset-button').addEventListener('click', resetView);
    window.addEventListener('resize', resetView);

    resetView();
    update(root);
});
