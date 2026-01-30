import './app.css'

// 🐨 Replace these placeholders with class instances from ./classes.
// 🐨 Use Electronics, Clothing, and Perishable for the three items.
const items = [
	{
		name: 'Laptop',
		description: 'TODO: implement Electronics.getDescription',
		tracking: 'TODO: implement Electronics.getTrackingInfo',
		price: 'TODO: implement Electronics.calculatePrice',
		todo: 'TODO: replace with Electronics class',
	},
	{
		name: 'Hoodie',
		description: 'TODO: implement Clothing.getDescription',
		tracking: null,
		price: 'TODO: implement Clothing.calculatePrice',
		todo: 'TODO: replace with Clothing class',
	},
	{
		name: 'Apples',
		description: 'TODO: implement Perishable.getDescription',
		tracking: null,
		price: null,
		todo: 'TODO: replace with Perishable class',
	},
]

// 🐨 Use InventoryManager + ConsoleLogger to generate a real log message.
const logPreview = 'TODO: implement InventoryManager.receiveStock'

// 🐨 Use InMemoryLogger and display the number of logs stored.
const memoryLogCount = 'TODO: implement InMemoryLogger.getLogs'

function App() {
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
					{items.map((item) => (
						<div className="card" key={item.name}>
							<h3>{item.name}</h3>
							<p>{item.description}</p>
							{item.tracking ? <p>Tracking: {item.tracking}</p> : null}
							{item.price ? <p>Price: {item.price}</p> : null}
							<p className="todo">{item.todo}</p>
						</div>
					))}
				</div>
			</section>

			<section className="panel">
				<h2>Inventory Actions</h2>
				<div className="card">
					<p>Logger preview: {logPreview}</p>
					<p>Memory log count: {memoryLogCount}</p>
					<p className="todo">
						TODO: wire up ConsoleLogger, InMemoryLogger, and InventoryManager
					</p>
				</div>
			</section>
		</div>
	)
}

export default App
