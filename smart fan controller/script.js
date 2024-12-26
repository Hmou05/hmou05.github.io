class FanController {
    constructor() {
        this.speed = 0;
        this.maxSpeed = 100;
        this.isOn = false;
        this.animationDuration = 0;
        
        // UI Elements
        this.fan = document.querySelector('.fan');
        this.speedDisplay = document.getElementById('vitesse');
        this.indicatorFill = document.querySelector('.indicator-fill');
        
        // Buttons
        this.minusBtn = document.getElementById('minus');
        this.actionBtn = document.getElementById('action');
        this.plusBtn = document.getElementById('plus');
        
        this.initializeEventListeners();
        this.updateUI();
    }

    initializeEventListeners() {
        this.minusBtn.addEventListener('click', () => this.decreaseSpeed());
        this.plusBtn.addEventListener('click', () => this.increaseSpeed());
        this.actionBtn.addEventListener('click', () => this.togglePower());
    }

    decreaseSpeed() {
        if (!this.isOn) return;
        this.speed = Math.max(0, this.speed - 10);
        this.updateUI();
    }

    increaseSpeed() {
        if (!this.isOn) return;
        this.speed = Math.min(this.maxSpeed, this.speed + 10);
        this.updateUI();
    }

    togglePower() {
        this.isOn = !this.isOn;
        if (!this.isOn) {
            this.speed = 0;
        }
        this.updateUI();
        this.updatePowerButton();
    }

    updateUI() {
        // Update speed display
        this.speedDisplay.textContent = (this.speed / 10).toFixed(2);
        
        // Update fan animation
        if (this.isOn && this.speed > 0) {
            this.animationDuration = 2 / (this.speed / 10);
            this.fan.style.animationDuration = this.animationDuration + 's';
        } else {
            this.fan.style.animationDuration = '0s';
        }

        // Update indicator fill
        this.indicatorFill.style.width = this.speed + '%';
        
        // Update button states
        this.minusBtn.disabled = !this.isOn || this.speed === 0;
        this.plusBtn.disabled = !this.isOn || this.speed === this.maxSpeed;
    }

    updatePowerButton() {
        if (this.isOn) {
            this.actionBtn.style.background = 'var(--danger-color)';
            this.actionBtn.querySelector('i').classList.remove('fa-power-off');
            this.actionBtn.querySelector('i').classList.add('fa-stop');
        } else {
            this.actionBtn.style.background = 'var(--accent-color)';
            this.actionBtn.querySelector('i').classList.remove('fa-stop');
            this.actionBtn.querySelector('i').classList.add('fa-power-off');
        }
    }
}

// Initialize the fan controller when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const fanController = new FanController();
});
