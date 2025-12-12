import { Dialog } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true); // yuklanishni boshlash
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setItem(data);
      setLoading(false); // yuklash tugadi
    };

    getData();
  }, [id]);

  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        navigate(-1);
      }}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30 " aria-hidden="true">
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-3xl rounded bg-white p-10">
              {loading ? (
                // ✅ Spinner loading
                <div className="flex justify-center items-center h-96">
                  <div className="h-12 w-12 rounded-full border-4 border-dotted border-blue-600 animate-spin"></div>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row gap-x-8 h-96">
                    {item?.image && (
                        <div className="relative w-72 h-full hidden md:inline">
                            <img src={item.image} alt={item.title} />
                        </div>
                    )}
                    <div className="flex-1 flex flex-col">
                        <div className="flex-1">
                            <h4 className="font-semibold">
                                {item?.title}
                            </h4>
                            <p className="font-medium text-sm">
                                ${item?.price}
                            </p>

                            <div className="flex items-center text-sm my-4">
                                <p>{item.rating.rate}</p>
                                {item?.rating.rate && (
                                  <div className="flex items-center ml-2 mr-6">
                                    
                                  </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductDetail;
