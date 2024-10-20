function addClothes() {
    // Hide the empty state and show the loading state
    document.getElementById('emptyState').classList.add('hidden');
    document.getElementById('loadingGrid').classList.remove('hidden');

    // Simulate a delay for loading
    setTimeout(() => {
        // After loading, hide loading state and show the clothes grid
        document.getElementById('loadingGrid').classList.add('hidden');
        document.getElementById('clothesGrid').classList.remove('hidden');
        loadClothes();
    }, 2000); // Simulates a 2-second load time
}

function loadClothes() {
    const clothesGrid = document.getElementById('clothesGrid');
    clothesGrid.innerHTML = `
        <div class="clothes-item">Shirt #1</div>
        <div class="clothes-item">Shirt #1</div>
        <div class="clothes-item">Shirt #1</div>
        <div class="clothes-item">Layer 1</div>
        <div class="clothes-item">Layer 1</div>
    `;
}
