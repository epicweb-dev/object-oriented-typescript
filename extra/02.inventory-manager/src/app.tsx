import './app.css'
import {
	Clothing,
	ConsoleLogger,
	Electronics,
	InMemoryLogger,
	InventoryManager,
	Perishable,
} from './classes'

function App() {
	const laptop = new Electronics({
		id: 'elect-001',
		name: 'Laptop',
		quantity: 3,
		basePrice: 999.99,
		brand: 'Nova',
		model: 'X1',
		serialNumber: 'SN-12345',
		warrantyMonths: 24,
		location: 'Aisle 4',
	})

	const hoodie = new Clothing({
		id: 'cloth-042',
		name: 'Hoodie',
		quantity: 12,
		basePrice: 39.99,
		size: 'M',
		color: 'Slate',
	})

	const apples = new Perishable({
		id: 'per-019',
		name: 'Apples',
		quantity: 20,
		basePrice: 1.25,
		expirationDate: '2026-02-12',
	})

	const consoleLogger = new ConsoleLogger()
	const memoryLogger = new InMemoryLogger()
	const manager = new InventoryManager(consoleLogger)
	const logPreview = manager.receiveStock(laptop, 0)
	memoryLogger.log('TODO: implement InMemoryLogger.getLogs')

	return (
		<div className="app">
			<header className="app-header">
				<h1>Inventory Manager</h1>
				<p className="subtitle">
					Practice classes, interfaces, inheritance, and composition.
				</p>
			</header>

			<section className="panel">
				<h2>Items</h2>
				<div className="grid">
					<div className="card">
						<h3>{laptop.name}</h3>
						<p>{laptop.getDescription()}</p>
						<p>Tracking: {laptop.getTrackingInfo()}</p>
						<p>Price (2): ${laptop.calculatePrice(2)}</p>
						<p className="todo">TODO: implement Electronics methods</p>
					</div>
					<div className="card">
						<h3>{hoodie.name}</h3>
						<p>{hoodie.getDescription()}</p>
						<p>Price (3): ${hoodie.calculatePrice(3)}</p>
						<p className="todo">TODO: implement Clothing methods</p>
					</div>
					<div className="card">
						<h3>{apples.name}</h3>
						<p>{apples.getDescription()}</p>
						<p className="todo">TODO: implement Perishable description</p>
					</div>
				</div>
			</section>

			<section className="panel">
				<h2>Inventory Actions</h2>
				<div className="card">
					<p>Logger preview: {logPreview}</p>
					<p>Memory log count: {memoryLogger.getLogs().length}</p>
					<p className="todo">
						TODO: implement InventoryManager and logger behaviors
					</p>
				</div>
			</section>
		</div>
	)
}

export default App
