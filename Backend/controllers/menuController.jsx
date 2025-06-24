export const getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    console.error('❌ Error fetching menu items:', err.message);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
};
