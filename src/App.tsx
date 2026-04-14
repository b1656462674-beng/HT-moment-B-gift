/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { X, Maximize2, Upload, Plus, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type GiftType = 'NORMAL' | 'VIP' | 'LEVEL' | 'FANS' | 'NOBLE' | 'MATE' | 'POST_ANIMATION';

export default function App() {
  const [giftName, setGiftName] = useState('');
  const [showInWall, setShowInWall] = useState<'SHOW' | 'HIDE'>('HIDE');
  const [isWishGift, setIsWishGift] = useState<'YES' | 'NO'>('NO');
  const [giftType, setGiftType] = useState<GiftType>('NORMAL');
  const [giftTags, setGiftTags] = useState<string[]>([]);
  const [feeType, setFeeType] = useState<'FREE' | 'COINS'>('COINS');
  const [coins, setCoins] = useState('0');
  const [isDisplayEnabled, setIsDisplayEnabled] = useState(false);
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false);
  const [animationType, setAnimationType] = useState<'GRAVITY'>('GRAVITY');
  const [expiry, setExpiry] = useState('24h');

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-4 md:p-8">
      <div className="mx-auto max-w-5xl bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-[#2d3a4b] text-white px-4 py-3 flex items-center justify-between">
          <h1 className="text-sm font-medium">Add</h1>
          <div className="flex items-center gap-4">
            <Maximize2 className="w-4 h-4 cursor-pointer hover:text-gray-300 transition-colors" />
            <X className="w-4 h-4 cursor-pointer hover:text-gray-300 transition-colors" />
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex">
            <button className="px-6 py-3 text-blue-600 border-b-2 border-blue-600 text-sm font-medium">
              设置
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-6">
          {/* Gift Name */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-right text-sm pt-2">
              <span className="text-red-500 mr-1">*</span>礼物名称
            </label>
            <div className="flex-1">
              <input
                type="text"
                placeholder="填写英文，如果其他语种没有配置，默认走英文"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={giftName}
                onChange={(e) => setGiftName(e.target.value)}
              />
            </div>
          </div>

          {/* Multi-language Name */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-right text-sm pt-2">名称多语言</label>
            <div className="flex-1 space-y-3">
              <div className="flex gap-2">
                <select className="border border-gray-300 rounded px-3 py-2 text-sm bg-white w-32">
                  <option>English</option>
                  <option>中文</option>
                </select>
                <input
                  type="text"
                  placeholder="English"
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button className="text-red-400 hover:text-red-600">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <button className="flex items-center gap-1 text-gray-600 border border-gray-300 rounded px-4 py-1.5 text-sm hover:bg-gray-50 transition-colors">
                <Plus className="w-4 h-4" /> 追加
              </button>
              <p className="text-red-400 text-xs">*中日韩5字内，其他语言10字内</p>
            </div>
          </div>

          {/* Show in Gift Wall */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-right text-sm">
              <span className="text-red-500 mr-1">*</span>是否在礼物墙展示
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="showWall"
                  checked={showInWall === 'SHOW'}
                  onChange={() => setShowInWall('SHOW')}
                  className="w-4 h-4 text-blue-600"
                />
                展示
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="showWall"
                  checked={showInWall === 'HIDE'}
                  onChange={() => setShowInWall('HIDE')}
                  className="w-4 h-4 text-blue-600"
                />
                不展示
              </label>
            </div>
          </div>

          {/* Is Wish Gift */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-right text-sm">
              <span className="text-red-500 mr-1">*</span>是否心愿礼物
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="wishGift"
                  checked={isWishGift === 'YES'}
                  onChange={() => setIsWishGift('YES')}
                  className="w-4 h-4 text-blue-600"
                />
                是
              </label>
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="wishGift"
                  checked={isWishGift === 'NO'}
                  onChange={() => setIsWishGift('NO')}
                  className="w-4 h-4 text-blue-600"
                />
                否
              </label>
            </div>
          </div>

          {/* Animation File / Size */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <label className="w-32 text-right text-sm">动画文件</label>
              <div className="flex-1 flex gap-2">
                <input
                  type="text"
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50"
                  readOnly
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm flex items-center gap-1 hover:bg-blue-700 transition-colors">
                  <Upload className="w-4 h-4" /> 上传
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <label className="w-32 text-right text-sm">动画文件大小</label>
              <div className="flex items-center gap-6">
                {['160dp', '280dp', '全屏'].map((size) => (
                  <label key={size} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="animSize" className="w-4 h-4 text-blue-600" />
                    {size}
                  </label>
                ))}
              </div>
            </div>

            {/* Display Style - Conditional on Gravity Sensing */}
            {animationType === 'GRAVITY' && (
              <div className="flex items-start gap-4">
                <label className="w-32 text-right text-sm pt-2">
                  <span className="text-red-500 mr-1">*</span>展示样式
                </label>
                <div className="flex-1 space-y-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm bg-gray-50"
                      readOnly
                      placeholder="请上传展示样式图片"
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm flex items-center gap-1 hover:bg-blue-700 transition-colors">
                      <Upload className="w-4 h-4" /> 上传
                    </button>
                  </div>
                  <p className="text-red-500 text-xs">必填</p>
                </div>
              </div>
            )}
          </div>

          {/* Thumbnail */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-right text-sm pt-2">
              <span className="text-red-500 mr-1">*</span>缩略图
            </label>
            <div className="flex-1 space-y-1">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 border border-red-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                  readOnly
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm flex items-center gap-1 hover:bg-blue-700 transition-colors">
                  <Upload className="w-4 h-4" /> 上传
                </button>
              </div>
              <p className="text-red-500 text-xs">必填</p>
            </div>
          </div>

          {/* Fee Type */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-right text-sm pt-2">
              <span className="text-red-500 mr-1">*</span>付费类型
            </label>
            <div className="flex-1 space-y-3">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="feeType"
                    checked={feeType === 'FREE'}
                    onChange={() => setFeeType('FREE')}
                    className="w-4 h-4 text-blue-600"
                  />
                  FREE
                </label>
                <div className="flex items-center gap-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input
                      type="radio"
                      name="feeType"
                      checked={feeType === 'COINS'}
                      onChange={() => setFeeType('COINS')}
                      className="w-4 h-4 text-blue-600"
                    />
                    HT Coins
                  </label>
                  <input
                    type="number"
                    value={coins}
                    onChange={(e) => setCoins(e.target.value)}
                    className="w-20 border border-gray-300 rounded px-2 py-1 text-sm bg-gray-50"
                  />
                </div>
              </div>
              <p className="text-red-400 text-xs">*FREE代表免费赠送,HT Coins代表需要消耗虚拟币赠送</p>
              <p className="text-red-500 text-xs">请选择付费类型</p>
            </div>
          </div>

          {/* Display Toggle */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-right text-sm">展示</label>
            <div className="flex-1 flex items-center justify-between">
              <button
                onClick={() => setIsDisplayEnabled(!isDisplayEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative ${isDisplayEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isDisplayEnabled ? 'left-7' : 'left-1'}`} />
              </button>
              <p className="text-red-400 text-xs">*勾选表示该配置生效,在客户端展示</p>
            </div>
          </div>

          {/* Gift Type */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-right text-sm pt-2">
              <span className="text-red-500 mr-1">*</span>礼物类型
            </label>
            <div className="flex-1 flex flex-wrap gap-y-4 gap-x-6">
              {[
                { id: 'NORMAL', label: '普通礼物' },
                { id: 'VIP', label: '专属VIP礼物' },
                { id: 'LEVEL', label: '等级用户礼物' },
                { id: 'FANS', label: '粉丝团专属' },
                { id: 'NOBLE', label: '贵族等级' },
                { id: 'MATE', label: '密友专属' },
                { id: 'POST_ANIMATION', label: '帖文动效礼物' },
              ].map((type) => (
                <label key={type.id} className="flex items-center gap-2 text-sm cursor-pointer">
                  <input
                    type="radio"
                    name="giftType"
                    checked={giftType === type.id}
                    onChange={() => setGiftType(type.id as GiftType)}
                    className="w-4 h-4 text-blue-600"
                  />
                  {type.label}
                </label>
              ))}
              <p className="w-full text-red-400 text-xs mt-1">*必须选择类型</p>
            </div>
          </div>

          {/* Animation Type */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-right text-sm">
              <span className="text-red-500 mr-1">*</span>动效类型
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 text-sm cursor-pointer">
                <input
                  type="radio"
                  name="animationType"
                  checked={animationType === 'GRAVITY'}
                  onChange={() => setAnimationType('GRAVITY')}
                  className="w-4 h-4 text-blue-600"
                />
                重力感应
              </label>
            </div>
          </div>

          {/* Gift Tags */}
          <div className="flex items-start gap-4">
            <label className="w-32 text-right text-sm pt-2">礼物标签</label>
            <div className="flex-1 flex flex-wrap gap-4">
              {[
                { id: 'custom', label: '自定义标签' },
                { id: 'limited', label: '限时标签' },
                { id: 'lucky', label: '幸运礼物' },
                { id: 'mystery', label: '盲盒礼物' },
              ].map((tag) => (
                <label
                  key={tag.id}
                  className="flex items-center gap-2 text-sm cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={giftTags.includes(tag.id)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setGiftTags([...giftTags, tag.id]);
                      } else {
                        setGiftTags(giftTags.filter((t) => t !== tag.id));
                      }
                    }}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  {tag.label}
                </label>
              ))}
            </div>
          </div>

          {/* Play Animation Toggle */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-right text-sm">播放动效</label>
            <div className="flex-1 flex items-center justify-between">
              <button
                onClick={() => setIsAnimationEnabled(!isAnimationEnabled)}
                className={`w-12 h-6 rounded-full transition-colors relative ${isAnimationEnabled ? 'bg-blue-500' : 'bg-gray-300'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${isAnimationEnabled ? 'left-7' : 'left-1'}`} />
              </button>
              <p className="text-red-400 text-xs">
                *勾选表示该配置生效,在客户端收到礼物消息时，自动播放礼物动效
              </p>
            </div>
          </div>

          {/* Expiry */}
          <div className="flex items-center gap-4">
            <label className="w-32 text-right text-sm">背包过期(h)</label>
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full border border-blue-400 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <div className="absolute right-0 top-0 h-full flex flex-col border-l border-blue-400">
                  <button className="flex-1 px-2 hover:bg-gray-100 border-b border-blue-400">
                    <Plus className="w-3 h-3 rotate-45 scale-75" />
                  </button>
                  <button className="flex-1 px-2 hover:bg-gray-100">
                    <Plus className="w-3 h-3 rotate-45 scale-75" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-200">
          <button className="px-6 py-2 border border-gray-300 rounded text-sm hover:bg-gray-100 transition-colors">
            取消
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
            确认
          </button>
        </div>
      </div>
    </div>
  );
}
