import { useState } from "react";
import { Input, Button, Space, Typography, Select, Checkbox } from "antd";

const { Option } = Select;

function SearchConfigurationPanel() {
  const [searchCategory, setSearchCategory] = useState("all");
  const [searchFilters, setSearchFilters] = useState({
    tipo: false,
    numero: false,
    estado: false,
    fechaEntrada: false,
    fechaPagado: false,
    beneficiario: false,
    numeroCheque: false,
    numeroProyecto: false,
    ubicacionArchivo: false,
    keywords: false,
  });

  const handleCategoryChange = (value) => {
    setSearchCategory(value);
  };

  const handleFilterChange = (filterName, checked) => {
    setSearchFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: checked,
    }));
  };

  const handleSubmit = () => {
    // Aquí puedes realizar acciones basadas en los filtros y configuraciones seleccionados, como enviar una solicitud de búsqueda
    // o actualizar la configuración en el servidor
    console.log("Categoría seleccionada:", searchCategory);
    console.log("Filtros seleccionados:", searchFilters);
  };

  return (
    <Space direction="vertical">
      <Typography.Title level={4}>Panel de Configuración de Búsqueda</Typography.Title>
      <Select
        defaultValue="all"
        style={{ width: 180 }}
        onChange={handleCategoryChange}
      >
        <Option value="all">Todas las categorías</Option>
        <Option value="tipo">Tipo de Expediente</Option>
        <Option value="numero">Número de Expediente</Option>
        <Option value="estado">Estado de Expediente</Option>
        {/* Agrega más opciones de categorías según tus necesidades */}
      </Select>
      <Typography.Title level={5}>Filtros</Typography.Title>
      <Checkbox
        checked={searchFilters.tipo}
        onChange={(e) => handleFilterChange("tipo", e.target.checked)}
      >
        Tipo de Expediente
      </Checkbox>
      <Checkbox
        checked={searchFilters.numero}
        onChange={(e) => handleFilterChange("numero", e.target.checked)}
      >
        Número de Expediente
      </Checkbox>
      <Checkbox
        checked={searchFilters.estado}
        onChange={(e) => handleFilterChange("estado", e.target.checked)}
      >
        Estado de Expediente
      </Checkbox>
      {/* Agrega más opciones de filtros según tus necesidades */}
      <Typography.Title level={5}>Palabras Clave</Typography.Title>
      <Checkbox
        checked={searchFilters.keywords}
        onChange={(e) => handleFilterChange("keywords", e.target.checked)}
      >
        Buscar palabras clave dentro de los archivos PDF
      </Checkbox>
      <Button type="primary" onClick={handleSubmit}>
        Aplicar Configuración
      </Button>
    </Space>
  );
}

export default SearchConfigurationPanel;
