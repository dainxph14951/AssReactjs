import Product from '../models/products';
import slugify from 'slugify';

export const creatProduct = async (req, res) => {
  req.body.slug = slugify(req.body.name);
  console.log(req.body);
  try {
    const product = await new Product(req.body).save()
    res.json(product);
    console.log(product);
  } catch (error) {
    res.status(400).json({
      message: "Thêm sản phẩm không thành công"
    })
  }
}

export const list = async (req, res) => {
  let { name, page, _limit } = req.query    
  if (name || (page && _limit)) {                                                                              
    if (name) {
      try {
        const products = await Product.find({ name: new RegExp(name, 'i') }).exec();
        res.status(200).json(products)
      } catch (error) {
        res.status(401).json({
          message: "Lỗi , không lấy được sản phẩm"
        })
      }
    }
    if (page && _limit) {
      if (+page < 1) {
        page = 1
      }
      const page_size = +_limit;
      const statr = ((+page - 1) * + page_size);
      try {
        const products = await Product.find().skip(statr).limit(page_size).exec();
        res.status(200).json(products)
      } catch (error) {
        res.status(401).json({
          message: "Lỗi , không lấy được sản phẩm"
        })
      }
    }
  } else {
    try {
      const products = await Product.find().exec();
      res.status(200).json(products)
    } catch (error) {
      res.status(401).json({
        message: "Lỗi , không lấy được sản phẩm"
      })
    }
  }
}


export const productCate = async (req, res) => {
  const condistion = { category: req.params.cate };
  try {
    const products = await Product.find(condistion).exec();
    res.status(200).json(products)
  } catch (error) {
    res.status(401).json({
      message: "Lỗi,không thành công !"
    })
  }
};
export const get = async (req, res) => {
  // get a product
  try {
    const products = await Product.findOne({ _id: req.params.id }).exec();
    console.log(req.params.id);
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: 'Thêm sản phẩm không thành công',
    });
  }
};

export const remove = async (req, res) => {
  try {
    const products = await Product.findOneAndDelete({
      _id: req.params.id
    }).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: 'Xóa sản phẩm không thành công',
    });
  }
};

export const update = async (req, res) => {
  const condition = { _id: req.params.id };
  const update = req.body;
  const optional = { new: true };
  try {
    const products = await Product.findOneAndUpdate(
      condition,
      update,
      optional,
    ).exec();
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: 'update sản phẩm không thành công',
    });
  }
}; 
