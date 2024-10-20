// Function to handle adding clothes (simulating an action)
function addClothes() {
    document.getElementById('emptyState').classList.add('hidden');
    // Simulate adding clothes with a message or action
    alert('Clothes added!');
}
// Function to redirect to the add clothes page
function redirectToAddPage() {
    window.location.href = 'add-clothes.html'; // Adjust the path if needed
}

// Function to handle active state changes for tabs and bottom navigation
function setActiveTab(tabGroup, activeClass, selectedTab) {
    const tabs = document.querySelectorAll(`${tabGroup} .${activeClass}`);
    tabs.forEach(tab => tab.classList.remove(activeClass));
    selectedTab.classList.add(activeClass);
}

// Event listener for the top tabs
document.getElementById('tabs').addEventListener('click', function(event) {
    if (event.target.classList.contains('tab')) {
        setActiveTab('#tabs', 'active', event.target);
    }
});

// Event listener for the bottom navigation buttons
document.getElementById('bottomNav').addEventListener('click', function(event) {
    if (event.target.closest('.nav-item')) {
        const selectedNavItem = event.target.closest('.nav-item');
        setActiveTab('#bottomNav', 'active', selectedNavItem);
    }
});
