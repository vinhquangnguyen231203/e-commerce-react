import React, { useEffect, useState } from "react";
import { Input, Modal, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./searchbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { getResultSearch } from "../../redux/reducers/searchSlice";
import { getProductThunk } from "../../redux/thunk/productThunk";
import { useNavigate } from "react-router-dom";
import { formatProductName } from "../../utilities/ulties";

export default function SearchBar() {
  // State
  const { search, dataOutput, status } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [textModal, setTextModal] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // Function handlers
  const handleSearchItem = (data) => {
    dispatch(getResultSearch(data || ""));
  };
  
  const handleNavigateDetail = (product) => {
      const productName = formatProductName(product.name)

      navigate(`/san-pham/${productName}`, {
        state: {
          product: product
        }
      })
      setText("")
      setTextModal("")
      setModalOpen(false)
  }

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProductThunk());
    }
  }, [dispatch, status]);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="search-bar">
      <Input.Search
        className="search-input d-none d-lg-block"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          handleSearchItem(e.target.value);
        }}
      />
      {/* Result List */}
      {text.trim() && (
        <div className="search-results">
          <div className="results-list">
            {dataOutput.map((item) => (
              <div 
                key={item.id} // Make sure each item has a unique key
                className="result-item"
                onClick={() => handleNavigateDetail(item)}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}
      <Tooltip title="Tìm kiếm">
        <SearchOutlined
          className="custom-icon d-lg-none"
          onClick={toggleModal}
        />
      </Tooltip>

      <Modal
        title="Tìm kiếm"
        open={modalOpen}
        onCancel={toggleModal}
        footer={null}
        centered
        width={500}
        className="search-modal"
      >
        <Input.Search
          placeholder="Nhập từ khóa tìm kiếm..."
          value={textModal}
          onChange={(e) => {
            setTextModal(e.target.value);
            handleSearchItem(e.target.value);
          }}
        />
        {textModal.trim() && (
          <div className="search-results-modal">
            <div className="results-list">
              {dataOutput.map((item) => (
                <div 
                  key={item.id} // Make sure each item has a unique key
                  className="result-item"
                  onClick={() => handleNavigateDetail(item)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
