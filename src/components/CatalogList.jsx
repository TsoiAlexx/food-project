import { CatalogItem } from './CatalogItem';

function CatalogList({ catalog = [] }) {
    return (
        <div className="list">
            {catalog.map((el) => (
                <CatalogItem key={el.idCategory} {...el} />
            ))}
        </div>
    );
}

export { CatalogList };
